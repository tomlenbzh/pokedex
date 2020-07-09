import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  homeImg = '../../../assets/images/Pokeball-Home.png';
  mewImg = '../../../assets/images/MewLoader.png';
  bgImg = `https://wallpoper.com/images/00/28/18/37/abstract-black_00281837.jpg`;

  constructor(private router: Router) { }

  ngOnInit(): void { }
}
