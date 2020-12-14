
import { Component, OnInit } from '@angular/core';



import { Observable } from "rxjs";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Claims } from 'src/app/entities/claims';

import { AdminService } from "../services/admin.service";


import { UserService } from "../services/user.service";

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {

  
  loginForm: FormGroup;
  submitted: boolean = false;
  claimList:Observable<any>[] = [];
  usermail:String=localStorage.getItem('currentUser');


  constructor(private userService: UserService, private router: Router)  //when component is called then that service/waiter (who isholding data) is invoked
  {  }

  ngOnInit(): void {
    this.getClaimsById(this.usermail);
  }

  
  public getClaimsById(usermail) {
    this.userService.getClaimsById(usermail).subscribe(data => {
      this.claimList = data;
      console.log(this.claimList); 
    });
  }

  }


