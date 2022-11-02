import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeedbackComponent } from './input-feedback.component';

describe('InputFeedbackComponent', () => {
  let component: InputFeedbackComponent;
  let fixture: ComponentFixture<InputFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
