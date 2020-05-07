import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut, Donuts } from './interfaces/donut';
import { DonutDetail } from './interfaces/donutDetail';

@Injectable({
  providedIn: 'root'
})
export class DonutAPIService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis';

  constructor(private http:HttpClient) { }

  getDonuts() {
    return this.http.get<Donuts>(`${this.apiUrl}/donuts.json`);
  }

  getDonutDetail(id:number) {
    return this.http.get<DonutDetail>(`${this.apiUrl}/donuts/${id}.json`);
  }
}


