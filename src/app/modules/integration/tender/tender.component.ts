import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Tender } from 'src/app/modules/integration/models/tender.model';
import { TenderService } from 'src/app/modules/integration/services/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  public tenders: Tender[] = [];

  constructor(private tenderService: TenderService, private router: Router) { }

  ngOnInit(): void {
    this.tenderService.getAll().subscribe( res => {
      this.tenders = res;     
    })
  }
  makeOffer(tender:Tender) {
    this.router.navigate(['/tender/{id}', { id: tender.id}]);
  }

  }

