import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleSuggestionComponent } from './shedule-suggestion.component';

describe('SheduleAppointmentComponent', () => {
  let component: SheduleSuggestionComponent;
  let fixture: ComponentFixture<SheduleSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheduleSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
