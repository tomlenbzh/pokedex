import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  homeBg = '../../../assets/images/Wallpapers/MyPokedex.png';
  angularImg = 'https://angular.io/assets/images/logos/angular/angular.svg';
  pokeballImg = '../../../assets/images/load.png';

  constructor() { }

  ngOnInit(): void { }

}
