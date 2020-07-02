import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-detail-card',
  templateUrl: './type-detail-card.component.html',
  styleUrls: ['./type-detail-card.component.scss']
})
export class TypeDetailCardComponent implements OnInit {

  @Input() typeInfo: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('typeInfo:', this.typeInfo);
  }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }

  public goToTypeDetail(type: string): void {
    this.router.navigateByUrl(`/type-details/${type}`);
  }
}
