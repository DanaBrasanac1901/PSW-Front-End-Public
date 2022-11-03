import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { VerifyIntegrationComponent } from './modules/integration/verify-registartion/verify-integration.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'verify-registration/:id', component: VerifyIntegrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
