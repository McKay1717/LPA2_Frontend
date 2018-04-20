import { Component, OnInit } from '@angular/core';
import { Town } from '../town'
import { TownsApiService } from '../towns-api.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  providers: [TownsApiService]
})
export class MeteoComponent implements OnInit {

  towns: Town[] = [];

  constructor(private api: TownsApiService) { }

  ngOnInit() {
    this.api.GetTowns().subscribe(
      town => this.towns = town,
      (err) => console.error(err),
      () => this.LoadData())
  }
  LoadData() {
    for (let i = 0; i < this.towns.length; i++) {
         this.api.GetTown(this.towns[i].id).subscribe(town => this.towns[i] = town);
          console.log(this.towns[i].id);
    }
  }
}
