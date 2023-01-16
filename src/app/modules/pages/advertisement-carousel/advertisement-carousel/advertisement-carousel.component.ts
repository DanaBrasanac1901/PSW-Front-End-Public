import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../hospital/services/advertisement.service';

@Component({
  selector: 'advertisement-carousel',
  templateUrl: './advertisement-carousel.component.html',
  styleUrls: ['./advertisement-carousel.component.css']
})
export class AdvertisementCarouselComponent implements OnInit {


  public imgs: string[];
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;

  constructor(private adService: AdvertisementService) { }

  ngOnInit(): void {
    this.adService.getAdvertisements().subscribe(res => {
      
      this.imageUrl1 = 'data:image/jpeg;base64,' + res[0];
      this.imageUrl2 = 'data:image/jpeg;base64,' + res[1];
      this.imageUrl3 = 'data:image/jpeg;base64,' + res[2];
    });
   
  }

}
