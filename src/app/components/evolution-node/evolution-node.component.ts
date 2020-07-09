import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolution-node',
  templateUrl: './evolution-node.component.html',
  styleUrls: ['./evolution-node.component.scss']
})
export class EvolutionNodeComponent implements OnInit {

  @Input() pokemon: any;
  hasGender: boolean;
  gender: string;
  pokemonName: string;
  pokemonId: string;
  evolItem: string;
  firstPokemon: boolean;

  constructor(private router: Router) {
    this.hasGender = false;
    this.gender = '';
  }

  ngOnInit(): void {
    this.initEvolution();
  }

  private initEvolution(): void {
    this.firstPokemon = this.isFirstPokemon();
    this.pokemonId = this.processId(this.pokemon?.species_id);
    this.pokemonName = this.processName(this.pokemon?.species_name);
    this.evolItem = this.processItemName(this.pokemon?.item?.name);
  }

  private processName(name: string): string {
    const splitName = name.split('-');
    if (splitName.length > 1) {
      this.hasGender = true;
      this.gender = splitName[1] === 'f' ? 'fa fa-venus' : 'fa fa-mars';
    }
    return this.pokemon.species_name.split('-')[0];
  }

  private processItemName(itemName: string): string {
    return itemName?.replace('-', ' ');
  }

  private processId(id: number): string {
    const idString = id.toString();
    return idString.length < 3 ? `#` + '0'.repeat(3 - idString.length) + `${idString}` : `#` + `${idString}`;
  }

  public goToPokemonDetails(pokemonId: number) {
    this.router.navigateByUrl(`pokemon-details/${pokemonId}`);
  }

  private isFirstPokemon(): boolean {
    return (this.pokemon?.min_level === 1 && this.pokemon?.trigger_name === null) ? true : false;
  }
}
