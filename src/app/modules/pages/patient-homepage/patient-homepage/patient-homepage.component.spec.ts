import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHomepageComponent } from './patient-homepage.component';

describe('PatientHomepageComponent', () => {
  let component: PatientHomepageComponent;
  let fixture: ComponentFixture<PatientHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
