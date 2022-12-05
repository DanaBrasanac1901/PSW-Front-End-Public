import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { InputFeedbackComponent } from './input-feedback/input-feedback.component';
import { PatientHomepageComponent } from './patient-homepage/patient-homepage/patient-homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { RoleGuardService } from 'src/app/auth/role-guard.service';

const routes: Routes = [
  { path: 'appt-view', component: AppointmentViewComponent, canActivate: [RoleGuardService],
    data: { expectedRole: 'PATIENT' }
  }
  
];

@NgModule({
  declarations: [
    InputFeedbackComponent,
    PatientHomepageComponent,
    AppointmentViewComponent,
    ToolbarComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    RouterModule,
    InputFeedbackComponent,
    ToolbarComponent
  ]
})
export class HospitalModule { }
