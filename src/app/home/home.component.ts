import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { ColorModel } from '../models/color.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Front Colores';
  //array to save the data from API
  colorsArray: ColorModel[];
  //page, pageSize and collectionSize for pagination
  page: number;
  pageSize: number;
  collectionSize:number;

  constructor(protected colorService: ColorService){

  }

  ngOnInit() {
    //empty array to save data
    this.colorsArray=[];
    //start in page=1 then could change
    this.page=1;
    //pageSize=9 is static
    this.pageSize=9;
    //collectionSize=30 default value, this will save when get data
    this.collectionSize=30;
    this.getColors();
  }

  getColors() {
    this.colorService.getAllColors(this.page,this.pageSize).subscribe((response) => { 
      // if success update collectionSize with the max for this pageSize and total_pages
      this.collectionSize=this.pageSize*response['total_pages'];
      //save colors data
      this.colorsArray = response['data'];
      },(error) => {
        console.error(error);
      }
    );
  }
  //receive color name to copy to clipboard and index to refresh isCopied state
  copyInputMessage(val: string, index:number){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    //will show 'Copiado'
    this.colorsArray[index].isCopied=true;
    //wait 1.5s to refresh isCopied
    setTimeout(() => {
      this.colorsArray[index].isCopied=false;
    },1500);
  }

}
