import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InputFeedbackComponent } from '../hospital/input-feedback/input-feedback.component';
import { HospitalModule } from '../hospital/hospital.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HospitalModule
  ]
})
export class PagesModule { }
