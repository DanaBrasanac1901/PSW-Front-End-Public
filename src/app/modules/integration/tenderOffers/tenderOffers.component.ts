import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params  } from '@angular/router';
import { filter } from 'rxjs';
import { TenderOffer } from 'src/app/modules/integration/models/tenderOffer.model';
import { TenderOfferService } from 'src/app/modules/integration/services/tenderOffer.service';
import { Tender } from 'src/app/modules/integration/models/tender.model';
import { TenderService } from 'src/app/modules/integration/services/tender.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tenderoffer',
  templateUrl: './tenderOffers.component.html',
  styleUrls: ['./tenderOffers.component.css']
})
export class TenderOffersComponent implements OnInit {

  public offer: TenderOffer=new TenderOffer();
  public tender: Tender=new Tender();
  constructor(private tenderOfferService: TenderOfferService, private tenderService:TenderService, private router: Router,private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tenderService.getTender(params['id']).subscribe(res => {
        this.tender = res;
  })})}
  create(): void {
    this.offer.bloodBankId='55510651-d36e-444d-95fb-871e0902cd7e';
    this.offer.tenderId=this.tender.id;
    this.tenderOfferService.create(this.offer).subscribe();
    this.router.navigate(['/tenders']);
    }
  

  }

