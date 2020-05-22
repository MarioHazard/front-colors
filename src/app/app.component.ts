import { Component, OnInit } from '@angular/core';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-colors';
  colors: any[] =[];
  constructor(protected colorService: ColorService) {

  }
  ngOnInit() { 
    this.colorService.getAllColors().subscribe((response) => { 
        // Success
        this.colors = response['data'];
        console.log(this.colors);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
