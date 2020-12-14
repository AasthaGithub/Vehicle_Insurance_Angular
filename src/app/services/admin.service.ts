import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Claims } from 'src/app/entities/claims';

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

  viewClaims(): Observable<any[]>{
    console.log(this.http.get<any[]>(this.baseUrl + 'claims'));
    return this.http.get<any[]>(this.baseUrl + 'claims');
  }

  approveClaim(id:number):Observable<number>//RETURN TYPE
  {  
    console.log(this.baseUrl+'approvclaim/'+id);
      return this.http.get<number>(this.baseUrl+'approvclaim/'+id);
  }

  declineClaim(id:number):Observable<number>//RETURN TYPE
   {
    console.log(this.baseUrl+'declineclaim/'+id);
      return this.http.get<number>(this.baseUrl+'declineclaim/'+id);
  }
}
