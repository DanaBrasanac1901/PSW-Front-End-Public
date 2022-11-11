import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'verify-registration/:id', component: VerifyIntegrationComponent },

  { path: '', component: HomeComponent },
  {path: 'register',component: RegistrationComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
