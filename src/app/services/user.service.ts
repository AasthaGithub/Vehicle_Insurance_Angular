import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from 'src/Policy';
import { User } from 'src/User';
import { FormsModule } from '@angular/forms';
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

  private baseUrl = "http://localhost:8080/api/v1/";
  // private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  // user = new User() ;


  constructor(private http:HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
    // console.log(this.currentUser);
  }

  getClaimsById(useremail:number):Observable<any>
  {
  console.log(this.baseUrl+'userclaims/'+useremail);
  return this.http.get<any[]>(this.baseUrl+'userclaims/'+useremail);

  }

  claimPolicy(cls:Object, policyNum:number):Observable<boolean>{
    //console.log(this.http.post(this.baseUrl+'addclaims/'+policyNum));
  return this.http.put<boolean>(`${this.baseUrl}`+'addclaims',policyNum,cls);

  }

  addNewUser(newuser : User):Observable<any>{
    return this.http.post(this.baseUrl + 'adduser',newuser);
  }

  getCurrentUser(useremail:String,userpswd:String): Observable<User>{
    console.log(this.http.get<User>(this.baseUrl + 'checklogin/' + useremail + '/' + userpswd));
    return this.http.get<User>(this.baseUrl + 'checklogin/' + useremail + '/' + userpswd);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getPolicyDetails(uemail : String):Observable<any>{
    return this.http.get<Policy[]>(this.baseUrl + 'policies' + '/' + uemail);
  }

  // const user1 = localStorage.getItem('currentUser');
// if user is null
  // if(user1) {
    // go for login
  // }

  // getUser() {
  //   //if (this.id != null) {
  //   let id = JSON.parse(localStorage.getItem('currentUser')).id;
  //   return this.http.get(this.baseUrl + 'user/' + id);
  //   //}
  // }
  getClaims(){
    return this.http.get<Claims[]>(this.baseUrl + 'claims');
  }


}
