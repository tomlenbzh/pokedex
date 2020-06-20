import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemons'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(pokemonList: any, input: any, filter?: string): any {

    if (input === undefined) {
      return pokemonList;
    }

    return pokemonList.filter((pokemon: any) => {
      return pokemon.info.name.toLowerCase().includes(input.toLowerCase());
    });
  }
}
