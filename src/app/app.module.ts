import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';
import { AdminAddPlanComponent } from './admin-add-plan/admin-add-plan.component';
import { AdminViewClaimsComponent } from './admin-view-claims/admin-view-claims.component';
import { ClaimPolicyComponent } from './claim-policy/claim-policy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { EstimatePremiumComponent } from './estimate-premium/estimate-premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RenewPolicyComponent,
    AdminAddPlanComponent,
    AdminViewClaimsComponent,
    ClaimPolicyComponent,
    ClaimHistoryComponent,
    ChoosePlanComponent,
    EstimatePremiumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
