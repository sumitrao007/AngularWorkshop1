import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  private url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getPost(){
    return (this.http.get(this.url));
  }

  PostData(obj){
    return (this.http.post(this.url,obj));
  }

  Updatedata(obj){
     return (this.http.put(`${this.url}/${obj.id}`,obj));
  }
  DeleteData(id){
       return  (this.http.delete(`${this.url}/${id}`));
  }
  


}
