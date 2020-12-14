import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claims } from 'src/app/entities/claims';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private http:HttpClient) { }


  getClaimsById(useremail:number):Observable<any>
  {
  console.log(this.baseUrl+'userclaims/'+useremail);
  return this.http.get<any[]>(this.baseUrl+'userclaims/'+useremail);

  }

  claimPolicy(cls:Object, policyNum:number):Observable<boolean>{
    //console.log(this.http.post(this.baseUrl+'addclaims/'+policyNum));
  return this.http.put<boolean>(`${this.baseUrl}`+'addclaims',policyNum,cls);


  }
}
