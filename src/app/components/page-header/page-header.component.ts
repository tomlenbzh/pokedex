import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  homeImg: string;
  url: string;

  constructor(private router: Router) {
    this.url = '../../../../assets/images/';
  }

  ngOnInit(): void {
    if (this.router.url.includes('/pokemon-details')) {
      this.homeImg = `${this.url}/Ho_oHLoader.png`;
    } else {
      this.homeImg = `${this.url}/MewLoader.png`;
    }
  }

}
