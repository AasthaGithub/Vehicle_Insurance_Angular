import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddPlanComponent } from './admin-add-plan/admin-add-plan.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewClaimsComponent } from './admin-view-claims/admin-view-claims.component';
import { BuyPolicyComponent } from './buy-policy/buy-policy.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { ClaimPolicyComponent } from './claim-policy/claim-policy.component';
import { EstimatePremiumComponent } from './estimate-premium/estimate-premium.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path : 'login',
  component : LoginComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'register',
    component : SignupComponent
  },
  {
    path : 'buy',
    component : BuyPolicyComponent
  },
  {
    path : 'chooseplan',
    component : ChoosePlanComponent
  },
  {
    path : 'renew',
    component : RenewPolicyComponent
  },
  {
    path : 'claim',
    component : ClaimPolicyComponent
  },
  {
    path : 'estimate',
    component : EstimatePremiumComponent
  },
  {
    path : 'admin/viewclaim',
    component : ClaimHistoryComponent
  },
  {
    path : 'admin/addplan',
    component : AdminAddPlanComponent
  },
  {
    path : 'admin/viewclaim',
    component : AdminViewClaimsComponent
  },
  {
    path : 'admin/',
    component : AdminHomeComponent
  },
  {
    path : 'user/claimhistory',
    component : ClaimHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
