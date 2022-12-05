import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegistrationComponent } from "./modules/pages/registration/registration.component";
import { LoginComponent } from "./modules/pages/login/login/login.component";
import { VerifyIntegrationComponent } from './modules/integration/verify-registartion/verify-integration.component';
import { PatientHomepageComponent } from "./modules/hospital/patient-homepage/patient-homepage/patient-homepage.component";
import { RoleGuardService } from 'src/app/auth/role-guard.service';

const routes: Routes = [

  {
    path: '', component: HomeComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' } },
  {
    path: 'verify-registration/:id', component: VerifyIntegrationComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' } },
  {
    path: 'patient-home', component: PatientHomepageComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' }
},
  {
    path: 'register', component: RegistrationComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' }
},
  {
    path: 'login', component: LoginComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
