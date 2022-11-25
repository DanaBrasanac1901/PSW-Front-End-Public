import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyIntegrationComponent } from './verify-registartion/verify-integration.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    VerifyIntegrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ]
})
export class IntegrationModule { }
