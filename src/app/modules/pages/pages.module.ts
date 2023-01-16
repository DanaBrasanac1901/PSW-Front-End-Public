import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { RoleGuardService } from 'src/app/auth/role-guard.service';
import { PatientHomepageComponent } from '../pages/patient-homepage/patient-homepage/patient-homepage.component';
import { InputFeedbackComponent } from 'src/app/modules/hospital/input-feedback/input-feedback.component';
import { AdvertisementCarouselComponent } from './advertisement-carousel/advertisement-carousel/advertisement-carousel.component';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  {
    path: 'home', component: PatientHomepageComponent,
    canActivate:[RoleGuardService], data: { expectedRole: 'PATIENT' }
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    PatientHomepageComponent,
    InputFeedbackComponent,
    AdvertisementCarouselComponent
   
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
