import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diesels',
  templateUrl: './diesels.component.html',
  styleUrls: ['./diesels.component.css'],
})
export class DieselsComponent implements OnInit {
  showDieselsId!: number;
  showDieselsDetails: any;

  constructor(private routes: ActivatedRoute) {}

  showDieselsData = [
    {
      id: 1,
      name: 'BMW 520d',
      pict: '/assets/pict/diesels/bmw520dCar.png',
      speedMax: '230 km/h',
      c02: '119 g/km',
      speedSeconde: '8.0s',
    },
    {
      id: 2,
      name: 'Citroen C5 Aircross BlueHDi',
      pict: '/assets/pict/diesels/citroenC5AircrossCar.png',
      speedMax: '189 km/h',
      c02: '145 g/km',
      speedSeconde: '10.6s',
    },
    {
      id: 3,
      name: 'Mercedes Benz GLC',
      pict: '/assets/pict/diesels/mercedesBenzGLCCar.png',
      speedMax: '215 km/h',
      c02: '153 g/km',
      speedSeconde: '7.9s',
    },
    {
      id: 4,
      name: 'Peugeot 308 1.5 blueHDI',
      pict: '/assets/pict/diesels/peugeot308BlueHDICar.png',
      speedMax: '206 km/h',
      c02: '123 g/km',
      speedSeconde: '9.4s',
    },
    {
      id: 5,
      name: 'Renault Kangoo BLUE DCI 115',
      pict: '/assets/pict/diesels/renaultKangooBlueDCICar.png',
      speedMax: '177 km/h',
      c02: '146 g/km',
      speedSeconde: '13.2s',
    },
    {
      id: 6,
      name: 'Skoda Octavia TDI',
      pict: '/assets/pict/diesels/skodaOctaviaTDICar.png',
      speedMax: '192 km/h',
      c02: '132 g/km',
      speedSeconde: '11.8s',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showDieselsId = +params['id'];
      this.showDieselsDetails = this.showDieselsData.find(
        (diesels) => diesels.id === this.showDieselsId
      );
    });
  }
}
