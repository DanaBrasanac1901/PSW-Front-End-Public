import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthMeasurementsComponent } from './patient-health-measurements.component';

describe('PatientHealthMeasurementsComponent', () => {
  let component: PatientHealthMeasurementsComponent;
  let fixture: ComponentFixture<PatientHealthMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthMeasurementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHealthMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
