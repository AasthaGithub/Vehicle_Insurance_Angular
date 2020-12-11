import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Claims } from 'src/app/entities/claims';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private http:HttpClient) { }

  adminViewClaims(){
    //console.log(this.http.get<any[]>(this.baseUrl + 'claims'));
    return this.http.get<Claims[]>(this.baseUrl + 'claims');
  }

  
}
