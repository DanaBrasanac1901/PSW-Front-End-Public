import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRegularComponent } from './schedule-regular.component';

describe('ScheduleRegularComponent', () => {
  let component: ScheduleRegularComponent;
  let fixture: ComponentFixture<ScheduleRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
