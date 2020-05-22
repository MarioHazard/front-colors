import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ColorModel } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiPath: string;
  private httpOptionsWithContentType: object;
  private httpOptionsWithoutContentType: object;

  constructor(private http: HttpClient){
    //api URL
    this.apiPath = 'https://reqres.in/api';

    this.httpOptionsWithContentType = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

    this.httpOptionsWithoutContentType = {
      headers: new HttpHeaders({

      })
    };
  }
  //get colors data and total pages
  getAllColors(page:number,per_page:number){
    //use page and per_page params
    return this.http.get(this.apiPath + '/colors?page='+page+'&per_page='+per_page, this.httpOptionsWithoutContentType);
  }
  //get specific color
  getColorById(id: string){
    return this.http.get<ColorModel>(this.apiPath + '/color' + '/' + id, this.httpOptionsWithoutContentType);
  }
  //add new color
  createColor(color: ColorModel){
    return this.http.post(this.apiPath + '/color', color, this.httpOptionsWithContentType);
  }
  //remove color
  deleteColor(id: string){
    return this.http.delete(this.apiPath + '/color' + '/' + id, this.httpOptionsWithoutContentType);
  }
  //update color
  updateColor(color: ColorModel){
    return this.http.put(this.apiPath + '/color' + '/' + color.id, color, this.httpOptionsWithContentType);
  }
}