import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  constructor(private http:HttpClient) { }
  getDanhmuc(){
    return this.http.get('/assets/Subjects.js')
  }
  getHocsinh(){
    return this.http.get('/assets/Students.js')
  }
  getMonhoc(){
    
  }
}
