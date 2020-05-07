import { Component, OnInit } from '@angular/core';
import { CSHOFService } from '../cshof.service';
import { FamousPeople } from '../interfaces/famousPeople';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.scss']
})
export class FamousPeopleComponent implements OnInit {
  famousPeople: FamousPeople;
  constructor(private fpService: CSHOFService) { }

  ngOnInit(): void {
    this.fpService.getFamousPeople().subscribe(
      (data: FamousPeople) => this.famousPeople = { ...data },
      error => console.error(error)
    );
  }
}


