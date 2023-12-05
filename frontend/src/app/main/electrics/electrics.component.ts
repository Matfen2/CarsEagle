import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-electrics',
  templateUrl: './electrics.component.html',
  styleUrls: ['./electrics.component.css'],
})
export class ElectricsComponent implements OnInit {
  showElectricsId!: number;
  showElectricsDetails: any;

  constructor(private routes: ActivatedRoute) {}

  showElectricsData = [
    {
      id: 1,
      name: 'Dacia Spring',
      pict: '/assets/pict/electriques/daciaSpringCar.png',
      speedMax: '125 km/h',
      autonomie: '230 km',
      speedSeconde: '19.1s',
    },
    {
      id: 2,
      name: 'Fiat 500 e',
      pict: '/assets/pict/electriques/fiat500eCar.png',
      speedMax: '167 km/h',
      autonomie: '320 km',
      speedSeconde: '10.2s',
    },
    {
      id: 3,
      name: 'MG4',
      pict: '/assets/pict/electriques/mg4Car.png',
      speedMax: '160km/h',
      autonomie: '520 km',
      speedSeconde: '7.7s',
    },
    {
      id: 4,
      name: 'Peugeot 208 e',
      pict: '/assets/pict/electriques/peugeote208Car.png',
      speedMax: '362 km/h',
      autonomie: '150 km',
      speedSeconde: '8.1s',
    },
    {
      id: 5,
      name: 'Renault Megane e',
      pict: '/assets/pict/electriques/renaultMeganeETechCar.png',
      speedMax: '150 km/h',
      autonomie: '465 km',
      speedSeconde: '10.0s',
    },
    {
      id: 6,
      name: 'Tesla Model Y',
      pict: '/assets/pict/electriques/teslaModelYCar.png',
      speedMax: '255 km/h',
      autonomie: '533 km',
      speedSeconde: '3.7s',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showElectricsId = +params['id'];
      this.showElectricsDetails = this.showElectricsData.find(
        (electrics) => electrics.id === this.showElectricsId
      );
    });
  }
}
