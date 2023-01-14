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
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatTableModule } from '@angular/material/table'
import { CdkTableModule } from "@angular/cdk/table";
import { NgToastModule } from 'ng-angular-popup'
import { RoleGuardService } from "src/app/auth/role-guard.service";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { ToolbarComponent } from "./modules/pages/toolbar/toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSortModule } from "@angular/material/sort";
import { DatePipe } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
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
    MatToolbarModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    RoleGuardService,
    DatePipe
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
