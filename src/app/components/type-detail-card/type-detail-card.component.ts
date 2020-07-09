import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-detail-card',
  templateUrl: './type-detail-card.component.html',
  styleUrls: ['./type-detail-card.component.scss']
})
export class TypeDetailCardComponent implements OnInit {

  @Input() typeInfo: any;
  typesList = {
    doubleDamageFrom: [],
    halfDamageFrom: [],
    doubleDamageTo: [],
    halfDamageTo: [],
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initTypeCard();
  }

  private initTypeCard(): void {
    this.typesList.doubleDamageFrom = this.typeInfo.damage_relations.double_damage_from.map((x: any) => {
      return { name: x?.name, img: this.getTypeIcon(x?.name) };
    });
    this.typesList.halfDamageFrom = this.typeInfo.damage_relations.half_damage_from.map((x: any) => {
      return { name: x?.name, img: this.getTypeIcon(x?.name) };
    });
    this.typesList.doubleDamageTo = this.typeInfo.damage_relations.double_damage_to.map((x: any) => {
      return { name: x?.name, img: this.getTypeIcon(x?.name) };
    });
    this.typesList.halfDamageTo = this.typeInfo.damage_relations.half_damage_to.map((x: any) => {
      return { name: x?.name, img: this.getTypeIcon(x?.name) };
    });
  }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }

  public goToTypeDetail(type: string): void {
    this.router.navigateByUrl(`/type-details/${type}`);
  }
}
