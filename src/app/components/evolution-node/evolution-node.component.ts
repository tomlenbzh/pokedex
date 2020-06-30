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

  constructor(private router: Router) {
    this.hasGender = false;
    this.gender = '';
  }

  ngOnInit(): void { }

  public processName(name: string): string {
    const splitName = name.split('-');
    if (splitName.length > 1) {
      this.hasGender = true;
      this.gender = splitName[1] === 'f' ? 'fa fa-venus' : 'fa fa-mars';
    }
    return name.split('-')[0];
  }

  public processItemName(name: string): string {
    return name.replace('-', ' ');
  }

  public processId(id: number): string {
    const idString = id.toString();
    return idString.length < 3 ? `#` + '0'.repeat(3 - idString.length) + `${idString}` : `#` + `${idString}`;
  }

  public goToPokemonDetails(pokemonId: number) {
    this.router.navigateByUrl(`pokemon-details/${pokemonId}`);
  }

  public isFirstPokemon(pokemon: any): boolean {
    return (pokemon.min_level === 1 && pokemon.trigger_name === null) ? true : false;
  }

}
