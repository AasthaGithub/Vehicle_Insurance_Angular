// import { stringify } from '@angular/compiler/src/util';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { 
  }
  loginform :  FormGroup;
  invalidLogin: boolean = false;
date:Date=new Date();
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({										
            useremail: ['', Validators.required],										
            userpswd: ['', Validators.required]										
          });
      console.log(this.date);
  }
  user = new User();

  get useremail(){
    console.log(this.loginform.get('useremail'));
    return this.loginform.get('useremail');
  }
  get userpswd(){
    console.log(this.loginform.get('userpswd'));
    return this.loginform.get('userpswd');
  }
  
  checkLogin(){
    this.userService.getCurrentUser(this.loginform.controls.useremail.value,this.loginform.controls.userpswd.value).subscribe(data=>{
        this.user = data;
        console.log(this.user);
        if(this.user==null){
          alert("Invalid Login!");
          this.router.navigate(['']);
        }else{
          localStorage.setItem('currentUser',JSON.stringify(this.user.userEmail));
          console.log(localStorage.getItem('currentUser'));
          this.router.navigate(['user-home']);
        }
      });
    
  }
}
