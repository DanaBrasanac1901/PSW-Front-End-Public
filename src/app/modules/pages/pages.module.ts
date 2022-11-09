import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { HospitalModule } from '../hospital/hospital.module';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'register',component: RegistrationComponent},
  {path: 'login', component:LoginComponent}
];
@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HospitalModule,
    FormsModule
  ]
})
export class PagesModule { }
