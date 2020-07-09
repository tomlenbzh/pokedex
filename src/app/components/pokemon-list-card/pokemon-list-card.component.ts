import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.scss']
})

export class PokemonListCardComponent implements OnInit {

  @Input() pokemon: any;
  hasGender: boolean;
  gender = '';
  pokemonName: string;
  pokemonId: string;
  pokemontypes: any[] = [];

  constructor() {
    this.hasGender = false;
  }

  ngOnInit(): void {
    this.initPokemonCard();
  }

  private initPokemonCard(): void {
    this.pokemonName = this.pokemon?.info?.name;
    this.pokemonId = this.processId(this.pokemon?.info?.id);
    this.pokemontypes = this.pokemon?.info?.types.map((x: any) => {
      return { name: x.type.name, img: this.getTypeIcon(x?.type?.name) };
    });
  }

  private processId(id: number): string {
    const idString = id.toString();
    return idString.length < 3 ? `#` + '0'.repeat(3 - idString.length) + `${idString}` : `#` + `${idString}`;
  }

  private processName(name: string): string {
    const splitName = name.split('-');
    if (splitName.length > 1) {
      this.hasGender = true;
      this.gender = splitName[1] === 'f' ? 'fa fa-venus' : 'fa fa-mars';
    }
    return name.split('-')[0];
  }

  private getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }
}
