import { Component, OnInit, Input } from '@angular/core';
import { DonutDetail } from '../interfaces/donutDetail';
import { DonutAPIService } from '../donut-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {
  // @Input() donut:DonutDetail;

  donut:DonutDetail;
  id:number;
  @Input() ref:string;

  constructor(private donutData:DonutAPIService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.donutData.getDonutDetail(this.id).subscribe(
        (data: DonutDetail) => this.donut = { ...data },
        error => console.error(error)
      );
    })
  }

}
