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

  getAllColors(){
    return this.http.get(this.apiPath + '/colors', this.httpOptionsWithoutContentType);
  }

  getColorById(id: string){
    return this.http.get<ColorModel>(this.apiPath + '/color' + '/' + id, this.httpOptionsWithoutContentType);
  }

  createColor(color: ColorModel){
    return this.http.post(this.apiPath + '/color', color, this.httpOptionsWithContentType);
  }

  deleteColor(id: string){
    return this.http.delete(this.apiPath + '/color' + '/' + id, this.httpOptionsWithoutContentType);
  }

  updateColor(color: ColorModel){
    return this.http.put(this.apiPath + '/color' + '/' + color._id, color, this.httpOptionsWithContentType);
  }
}