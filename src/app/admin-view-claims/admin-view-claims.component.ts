import { Component, OnInit } from '@angular/core';



import { Observable } from "rxjs";
import { AdminService } from "../services/admin.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Claims } from 'src/app/entities/claims';

@Component({
  selector: 'app-admin-view-claims',
  templateUrl: './admin-view-claims.component.html',
  styleUrls: ['./admin-view-claims.component.css']
})
export class AdminViewClaimsComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  claimList: Claims[];
  empobj: Observable<any>[] = [];
  delRec: String;
  count: any = 0;

  constructor(private adminService: AdminService, private router: Router)  //when component is called then that service/waiter (who isholding data) is invoked
  {  }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.adminService.adminViewClaims().subscribe(data => {
      this.claimList = data;
      console.log(this.claimList); 
    });
  }

}
