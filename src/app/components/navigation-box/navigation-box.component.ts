import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-box',
  templateUrl: './navigation-box.component.html',
  styleUrls: ['./navigation-box.component.scss']
})
export class NavigationBoxComponent implements OnInit {

  @Input() boxInfo: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public navigateTolink(): void {
    this.router.navigateByUrl(this.boxInfo.route);
  }
}
