import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HospitalModule } from "./modules/hospital/hospital.module";
import { IntegrationModule } from "./modules/integration/integration.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { MatTableModule } from '@angular/material/table'
import { CdkTableModule } from "@angular/cdk/table";
import { FormsModule } from '@angular/forms';
import {NgToastModule} from 'ng-angular-popup'

import { AuthInterceptor } from "./auth/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    MatTableModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    FormsModule,
    NgToastModule,
    IntegrationModule,
    FormsModule,

    ReactiveFormsModule,
   


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
