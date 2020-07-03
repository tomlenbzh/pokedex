import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  homeBg = '../../../assets/images/Wallpapers/MyPokedex.png';
  angularImg = 'https://angular.io/assets/images/logos/angular/angular.svg';
  pokeballImg = '../../../assets/images/load.png';

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void { }

  public scrollTo(dest: string): void {
    const config: ScrollToConfigOptions = { target: dest };
    this.scrollToService.scrollTo(config);
  }
}
