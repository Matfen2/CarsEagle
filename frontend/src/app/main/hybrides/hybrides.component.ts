import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hybrides',
  templateUrl: './hybrides.component.html',
  styleUrls: ['./hybrides.component.css'],
})
export class HybridesComponent implements OnInit {
  showHybridesId!: number;
  showHybridesDetails: any;

  constructor(private routes: ActivatedRoute) {}

  showHybridesData = [
    {
      id: 1,
      name: 'DS7',
      pict: '/assets/pict/hybrid/DS7Car.png',
      speedMax: '180 km/h',
      autonomie: '230 km',
      speedSeconde: '8.4s',
    },
    {
      id: 2,
      name: 'HondaZR-V',
      pict: '/assets/pict/hybrid/HondaZR-VCar.png',
      speedMax: '173 km/h',
      autonomie: '192 km',
      speedSeconde: '7.9s',
    },
    {
      id: 3,
      name: 'Citroen C5 Aircross',
      pict: '/assets/pict/hybrid/citroenC5AircrossCar.png',
      speedMax: '200 km/h',
      autonomie: '147 km',
      speedSeconde: '10.2s',
    },
    {
      id: 4,
      name: 'Nissan Qashqai',
      pict: '/assets/pict/hybrid/nissanQashqaiECar.png',
      speedMax: '170 km/h',
      autonomie: '217 km',
      speedSeconde: '7.9s',
    },
    {
      id: 5,
      name: 'Peugeot 308 Blue HDI',
      pict: '/assets/pict/hybrid/peugeot3008Car.png',
      speedMax: '225 km/h',
      autonomie: '159 km',
      speedSeconde: '8.7s',
    },
    {
      id: 6,
      name: 'Renault Australia E',
      pict: '/assets/pict/hybrid/renaultAustralECar.png',
      speedMax: '219 km/h',
      autonomie: '167 km',
      speedSeconde: '8.0s',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showHybridesId = +params['id'];
      this.showHybridesDetails = this.showHybridesData.find(
        (hybrides) => hybrides.id === this.showHybridesId
      );
    });
  }
}
