import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { PokedexService } from '../../../services/pokedex.service';
import { PokemonType } from '../../../models/types.model';
import { typeList } from '../../../data/types.data';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pageTitle = 'Pokémons';
  loadingMessage = 'Loading...';
  isLoading: boolean;
  pokemonsList: any[] = [];
  nextUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0';
  typesList: PokemonType[] = typeList;
  searchPokemon: any;
  filterPokemon = 1;

  constructor(private pokedexService: PokedexService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllPokemons();
    }, 1000);
  }

  ngOnDestroy(): void { }

  private getAllPokemons(): any {

    return new Promise((resolve, reject) => {

      this.isLoading = true;
      const promises: Promise<any>[] = [];

      this.pokedexService.fetchAllPokemons(this.nextUrl)
        .subscribe((allPokemonsRaw) => {

          const allPokemons: any[] = [];
          this.nextUrl = allPokemonsRaw.next;

          allPokemonsRaw.results.forEach((element) => {

            const subPromise = new Promise((resolveSub, rejectSub) => {

              this.pokedexService.fetchPokemonInformation(element)
                .subscribe((pokeInfo) => {
                  if (pokeInfo.id <= 807) {
                    const item = {
                      info: pokeInfo,
                      img: `https://pokeres.bastionbot.org/images/pokemon/${pokeInfo.id}.png`,
                      card: {}
                    };
                    item.card = this.processType(pokeInfo)[0];
                    allPokemons.push(item);
                  }
                });
              resolveSub();
            });
            promises.push(subPromise);
          });
          Promise.all(promises)
            .then(() => {
              setTimeout(() => {
                this.pokemonsList = this.pokemonsList.concat(allPokemons).sort((a, b) => a.info.id - b.info.id);
                this.isLoading = false;
                this.loadingMessage = 'Loading more Pokémons...';
                resolve();
              }, 500);
            })
            .catch(error => {
              this.isLoading = false;
              reject(error);
            });
        });
    });
  }

  public seeDetails(pokemon: any): void {
    this.pokedexService.selectedPokemon = pokemon;
    setTimeout(() => {
      this.router.navigateByUrl(`pokemon-details/${pokemon.info.id}`);
    }, 300);
  }

  public onScroll(): void {
    if (this.nextUrl !== null) {
      this.getAllPokemons();
    }
  }

  public processNames(names: any[]): any[] {
    return names.map((x) => `Generation ${x.name.split('-')[1].toUpperCase()}`);
  }

  public processType(pokemon: any): any {
    return this.typesList.filter(x => x.type.toLowerCase() === pokemon.types[0].type.name);
  }
}
