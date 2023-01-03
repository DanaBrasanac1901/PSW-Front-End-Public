import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataInputComponent } from './patient-data-input.component';

describe('PatientDataInputComponent', () => {
  let component: PatientDataInputComponent;
  let fixture: ComponentFixture<PatientDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDataInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
