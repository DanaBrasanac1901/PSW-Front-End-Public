import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyIntegrationComponent } from './verify-registartion/verify-integration.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap, ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { RoleGuardService } from '../../auth/role-guard.service';
import { TenderComponent } from './tender/tender.component';
import { TenderOffersComponent } from './tenderOffers/tenderOffers.component';

const routes: Routes = [
  {
    path: 'verify-registration/:id', component: VerifyIntegrationComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'PATIENT' },
  },
  {
    path: 'tenders', component: TenderComponent
  },
  {
    path: 'tender/:id', component: TenderOffersComponent
  }
];


@NgModule({
  declarations: [
    VerifyIntegrationComponent,
    TenderComponent,
    TenderOffersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)

  ]
})
export class IntegrationModule { }
