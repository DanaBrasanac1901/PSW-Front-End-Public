import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleAppointmentComponent } from './shedule-appointment.component';

describe('SheduleAppointmentComponent', () => {
  let component: SheduleAppointmentComponent;
  let fixture: ComponentFixture<SheduleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
