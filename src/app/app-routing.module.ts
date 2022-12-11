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
    path: '', component: HomeComponent},
    {
    path: 'verify-registration/:id', component: VerifyIntegrationComponent},
  {
    path: 'patient-home', component: PatientHomepageComponent},
  {
    path: 'register', component: RegistrationComponent},
  {
    path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
