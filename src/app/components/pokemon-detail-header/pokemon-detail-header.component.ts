import { Component, OnInit, Input } from '@angular/core';

import { PokemonType } from '../../models/types.model';
import { typeList } from '../../data/types.data';

@Component({
  selector: 'app-pokemon-detail-header',
  templateUrl: './pokemon-detail-header.component.html',
  styleUrls: ['./pokemon-detail-header.component.scss']
})
export class PokemonDetailHeaderComponent implements OnInit {

  @Input() pokemonDetails: any;
  selectedGif = { type: '', class: '' };
  typesList: PokemonType[] = typeList;

  constructor() { }

  ngOnInit(): void { }

  public hasGif(type: string): boolean {
    const supportedTypes = ['Water', 'Flying', 'Ground', 'Electric', 'Fairy', 'Fire', 'Ghost', 'Grass', 'Poison', 'Bug', 'Fighting', 'Ice', 'Rock'];
    this.selectedGif.class = `${type.toLowerCase()}-gif`;
    return supportedTypes.includes(type) ? true : false;
  }

  public getGif(type: string): string {
    this.selectedGif.type = type;
    return `../../../../assets/images/gifs/${type.toLowerCase()}.gif`;
  }

  public processType(pokemon: any): any {
    return this.typesList.filter(x => x.type.toLowerCase() === pokemon.types[0].type.name)[0];
  }

  public processHeight(height: number): number {
    return height / 10;
  }

  public processWeight(weight: number): number {
    return weight / 10;
  }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }

}
