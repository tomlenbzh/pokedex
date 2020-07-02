import { Component, OnInit, Input } from '@angular/core';
import { PokemonType } from '../../models/types.model';
import { typeList } from '../../data/types.data';

@Component({
  selector: 'app-type-detail-header',
  templateUrl: './type-detail-header.component.html',
  styleUrls: ['./type-detail-header.component.scss']
})
export class TypeDetailHeaderComponent implements OnInit {

  @Input() typeInfo: any;
  typesClasses: PokemonType[] = typeList;

  constructor() { }

  ngOnInit(): void { }

  public getTypeIcon(type: string): string {
    return `assets/images/types/icons/${type}.png`;
  }

  public processType(type: any): any {
    return this.typesClasses.filter(x => x.class.toLowerCase().includes(type.name));
  }

  public processName(name: string): string {
    return name.replace('-', ' ');
  }
}
