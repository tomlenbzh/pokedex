import { Component, OnInit, Input } from '@angular/core';
import { PokemonGender } from '../../models/genders.model';

@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.scss']
})

export class PokemonListCardComponent implements OnInit {

  @Input() pokemon: any;
  hasGender: boolean;
  gender = '';

  constructor() {
    this.hasGender = false;
  }

  ngOnInit(): void { }

  public processId(id: number): string {
    const idString = id.toString();
    return idString.length < 3 ? `#` + '0'.repeat(3 - idString.length) + `${idString}` : `#` + `${idString}`;
  }

  public processName(name: string): string {
    const splitName = name.split('-');
    if (splitName.length > 1) {
      this.hasGender = true;
      this.gender = splitName[1] === 'f' ? 'fa fa-venus' : 'fa fa-mars';
    }
    return name.split('-')[0];
  }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }
}
