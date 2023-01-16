import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementCarouselComponent } from './advertisement-carousel.component';

describe('AdvertisementCarouselComponent', () => {
  let component: AdvertisementCarouselComponent;
  let fixture: ComponentFixture<AdvertisementCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
