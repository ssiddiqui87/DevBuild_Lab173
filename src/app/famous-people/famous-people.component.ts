import { Component, OnInit } from '@angular/core';
import { CSHOFService } from '../cshof.service';
import { FamousPeople } from '../interfaces/famousPeople';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.scss']
})
export class FamousPeopleComponent implements OnInit {

  famousPeople: FamousPeople;
  jsonString: string;
  people: any = [];
  formGroup: FormGroup;

  // constructor(private fpService: CSHOFService) { }\
  constructor(private httpClient: HttpClient, private readonly formBuilder: FormBuilder) { }


  // ngOnInit(): void {
  //   this.fpService.getFamousPeople().subscribe(
  //     (data: FamousPeople) => this.famousPeople = { ...data },
  //     error => console.error(error)
  //   );

  // }

  //Read from local json file
  ngOnInit() {
    this.httpClient.get("../../assets/computer-science-hall-of-fame.json").subscribe(data => {
      console.log(data);
      this.people = data;
    });

  }

  addFamousPeople(input: any) {
    let jsonObj: any = JSON.parse(this.people); // string to generic object first
    this.people = <FamousPeople>jsonObj;
    Object.assign(this.people, input);
    console.log("got to addFamousPeople" + this.people);
  }




}