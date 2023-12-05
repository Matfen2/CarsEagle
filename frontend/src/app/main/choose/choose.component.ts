import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
})
export class ChooseComponent implements OnInit {
  present: string = '';

  hybrides = [
    {
      id: 1,
      pict: '/assets/pict/hybrid/DS7.jpg',
    },
    {
      id: 2,
      pict: '/assets/pict/hybrid/HondaZR-V.jpg',
    },
    {
      id: 3,
      pict: '/assets/pict/hybrid/citroenC5Aircross.jpg',
    },
    {
      id: 4,
      pict: '/assets/pict/hybrid/nissanQashqaiE.jpg',
    },
    {
      id: 5,
      pict: '/assets/pict/hybrid/peugeot3008.jpeg',
    },
    {
      id: 6,
      pict: '/assets/pict/hybrid/renaultAustralE.jpeg',
    },
  ];

  electrics = [
    {
      id: 1,
      pict: '/assets/pict/electriques/daciaSpring.jpeg',
    },
    {
      id: 2,
      pict: '/assets/pict/electriques/fiat500e.jpg',
    },
    {
      id: 3,
      pict: '/assets/pict/electriques/mg4.jpg',
    },
    {
      id: 4,
      pict: '/assets/pict/electriques/peugeote208.jpg',
    },
    {
      id: 5,
      pict: '/assets/pict/electriques/renaultMeganeETech.jpeg',
    },
    {
      id: 6,
      pict: '/assets/pict/electriques/teslaModelY.jpg',
    },
  ];

  diesels = [
    {
      id: 1,
      pict: '/assets/pict/diesels/bmw520d.jpg',
    },
    {
      id: 2,
      pict: '/assets/pict/diesels/citroenC5Aircross.jpg',
    },
    {
      id: 3,
      pict: '/assets/pict/diesels/mercedesBenzGLC.jpg',
    },
    {
      id: 4,
      pict: '/assets/pict/diesels/peugeot308BlueHDI.jpg',
    },
    {
      id: 5,
      pict: '/assets/pict/diesels/renaultKangooBlueDCI.jpeg',
    },
    {
      id: 6,
      pict: '/assets/pict/diesels/skodaOctaviaTDI.jpg',
    },
  ];

  showType(car: string) {
    this.present = car;
  }

  ngOnInit(): void {}
}
