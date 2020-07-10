import { Component, OnInit, Input } from '@angular/core';

import { PokemonType } from '../../models/types.model';
import { typeList, TypesGif } from '../../data/types.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail-header',
  templateUrl: './pokemon-detail-header.component.html',
  styleUrls: ['./pokemon-detail-header.component.scss']
})
export class PokemonDetailHeaderComponent implements OnInit {

  @Input() pokemonDetails: any;
  selectedGifClass = { type: '', class: '' };
  typesList: PokemonType[] = typeList;
  pokemonName: string;
  pokemonHeight: number;
  pokemonWeight: number;
  baseExperience: string;
  pokemontypes: any[] = [];
  hasGif: boolean;
  pokemonGif: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initPokemon();
  }

  private initPokemon(): void {
    this.pokemonName = this.pokemonDetails?.name;
    this.pokemonHeight = this.processHeight(this.pokemonDetails?.height);
    this.pokemonWeight = this.processWeight(this.pokemonDetails?.weight);
    this.baseExperience = this.pokemonDetails?.baseExperience;
    this.pokemontypes = this.pokemonDetails?.types.map((x: any) => {
      return { name: x?.type?.name, img: this.getTypeIcon(x?.type?.name) };
    });
    console.log('this.pokemontypes:', this.pokemontypes);
    this.hasGif = this.checkGif(this.pokemonDetails?.colour?.type);
    if (this.hasGif === true) {
      this.pokemonGif = this.getGif(this.pokemonDetails?.colour?.type);
    }
  }

  private checkGif(type: string): boolean {
    const supportedTypes = TypesGif;
    this.selectedGifClass.class = `${type.toLowerCase()}-gif`;
    return supportedTypes.includes(type) ? true : false;
  }

  private getGif(type: string): string {
    this.selectedGifClass.type = type;
    return `../../../../assets/images/gifs/${type.toLowerCase()}.gif`;
  }

  private processType(pokemon: any): any {
    return this.typesList.filter(x => x.type.toLowerCase() === pokemon.types[0].type.name)[0];
  }

  private processHeight(height: number): number {
    return height / 10;
  }

  private processWeight(weight: number): number {
    return weight / 10;
  }

  private getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }

  public goToTypeDetails(name: any): void {
    this.router.navigateByUrl(`/type-details/${name}`);
  }
}
