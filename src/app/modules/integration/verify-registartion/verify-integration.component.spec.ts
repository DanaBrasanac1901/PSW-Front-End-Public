import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyIntegrationComponent } from './verify-integration.component';


describe('VerifyIntegrationComponent', () => {
  let component: VerifyIntegrationComponent;
  let fixture: ComponentFixture<VerifyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
