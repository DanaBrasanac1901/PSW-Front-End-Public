import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { MatButtonModule } from '@angular/material/button';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { SheduleSuggestionComponent } from "./schedule-suggestion/shedule-appointment/shedule-suggestion.component";
import { RoleGuardService } from 'src/app/auth/role-guard.service';
import { ScheduleRegularComponent } from './schedule-regular/schedule-regular/schedule-regular.component';
import { MatSortModule } from "@angular/material/sort";
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  {
    path: 'appt-view', component: AppointmentViewComponent,
    canActivate: [RoleGuardService], data: { expectedRole: 'PATIENT' }
  },
  { path: 'schedule-regular', component: ScheduleRegularComponent },
  { path: 'schedule-suggestion', component: SheduleSuggestionComponent },
  { path: 'profile', component: PatientProfileComponent }
];

@NgModule({
  declarations: [
    AppointmentViewComponent,
    SheduleSuggestionComponent,
    ScheduleRegularComponent,
    PatientProfileComponent,
    
  ],
  imports: [
    MatSortModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  exports: [
    RouterModule,
    AppointmentViewComponent
  ]
})
export class HospitalModule { }
