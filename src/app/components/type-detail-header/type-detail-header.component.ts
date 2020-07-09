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
  typeName: string;
  typeGeneration: string;
  typeIcon: string;
  typeClass: string;
  typesClasses: PokemonType[] = typeList;

  constructor() { }

  ngOnInit(): void {
    this.initTypeHeader();
  }

  private initTypeHeader(): void {
    this.typeName = this.typeInfo?.name;
    this.typeGeneration = this.processName(this.typeInfo?.generation?.name);
    this.typeIcon = this.getTypeIcon(this.typeInfo?.name);
    this.typeClass = this.processType(this.typeInfo)[0].class;
  }

  private getTypeIcon(type: string): string {
    return `assets/images/types/icons/${type}.png`;
  }

  private processType(type: any): any {
    return this.typesClasses.filter(x => x.class.toLowerCase().includes(type.name));
  }

  private processName(name: string): string {
    return name.replace('-', ' ');
  }
}
