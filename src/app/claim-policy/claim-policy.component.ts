import { Component, OnInit } from '@angular/core';



import { Observable } from "rxjs";
import { UserService } from "../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Claims } from 'src/app/entities/claims';


@Component({
  selector: 'app-claim-policy',
  templateUrl: './claim-policy.component.html',
  styleUrls: ['./claim-policy.component.css']
})
export class ClaimPolicyComponent implements OnInit {

  currentDate:Date = new Date();
  cls: Claims= new Claims();
  submitted = false;
  polNum:number;
  mobNum:number;
  expAmt:number;
  reason:String;

  reqNum:number=null;
  // claimDate: Date; 
  // Request_Num:number;
  // ApprovStatus:String;
  // reqAmt:number;
  // approvAmt:number;
  // reason:String;
  
  // var year = this.date.getFullYear();
  // //     var month = this.date.getMonth();
  // //     var day = this.date.getDate();
  // //     var c = new Date(year + 1, month, day)
  
  
  // // // this.policy.endDate.setDate = this.date.getDate  ;
  // // // this.policy.endDate.setMonth= this.date.getMonth;
  // // this.policy.endDate= c;


  constructor(private userService: UserService) { }
  ngOnInit() {
  }
  
 save() {
   this.userService.claimPolicy(this.cls,this.polNum)
     .subscribe(data => console.log(data), error => console.log(error));
     
  }
  onSubmit() {
    this.cls = new Claims();  
   this.cls.reason=this.reason;
   this.cls.policyNum=this.polNum;
   this.cls.claimDate= this.currentDate;
   this.cls.reqAmt=this.expAmt;
   this.cls.Request_Num=this.reqNum;
   console.log(this.cls);  
   this.save();
  this.submitted = true;
 }
}
