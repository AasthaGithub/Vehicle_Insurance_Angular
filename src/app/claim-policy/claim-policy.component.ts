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

  cls: Claims= new Claims();
  submitted = false;
  polNum:number;
  mobNum:number;
  expAmt:number;
  reason:String;



  constructor(private userService: UserService) { }
  ngOnInit() {
  }
  newClaims(): void {
    this.submitted = false;
    this.cls = new Claims();
  }
 save() {
   this.userService.claimPolicy(this.cls,this.polNum)
     .subscribe(data => console.log(data), error => console.log(error));
     this.cls = new Claims();
     console.log(this.cls);
  }
  onSubmit() {
   this.submitted = true;
     this.save();
 }
}
