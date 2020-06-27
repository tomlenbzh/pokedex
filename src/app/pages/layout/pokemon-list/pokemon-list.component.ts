import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { PokedexService } from '../../../services/pokedex.service';
import { PokemonType } from '../../../models/types.model';
import { typeList } from '../../../data/types.data';
import { Title } from '@angular/platform-browser';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pageTitle: string;
  loadingMessage = 'Loading...';
  isLoading: boolean;
  pokemonsList: any[] = [];
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0';
  typesList: PokemonType[] = typeList;
  searchPokemon: any;
  filterPokemon = 1;

  /* ++++++++++ */

  totalRecords: number;
  currentPage: number;

  constructor(
    private pokedexService: PokedexService,
    private scrollToService: ScrollToService,
    private titleService: Title,
    private router: Router,
  ) {
    this.titleService.setTitle('Pokémons');
    this.pageTitle = 'Pokémons';
    this.currentPage = 1;
  }

  ngOnInit(): void {

    this.isLoading = true;
    this.checkPokemonsInStorage() === true
      ? (console.log('HAS STORAGE'), this.getPokemonsFromStorage())
      : (console.log('NO STORAGE'), this.initPokemonList());
  }

  ngOnDestroy(): void { }

  private checkPokemonsInStorage(): boolean {
    return localStorage.getItem('pokemonslist') !== null ? true : false;
  }

  private getPokemonsFromStorage(): void {
    const pokemonsList = JSON.parse(localStorage.getItem('pokemonslist'));
    this.pokemonsList = pokemonsList;
    this.totalRecords = pokemonsList.length;
    this.isLoading = false;
  }

  private initPokemonList(): void {
    this.loadingMessage = 'Pokédex Initialisation';
    this.getAllPokemonsNames()
      .then((rawData) => {
        this.getAllPokemonsInfo(rawData)
          .then((pokemonslist: any) => {
            const filterdPokemons = pokemonslist.filter((x: any) => x.info.id <= 807);
            localStorage.setItem('pokemonslist', JSON.stringify(filterdPokemons));
            this.pokemonsList = filterdPokemons;
            this.totalRecords = filterdPokemons.length;
            this.isLoading = false;
          })
          .catch((error) => {
            console.log('Error', error);
            this.isLoading = false;
          });
      })
      .catch((error) => {
        console.log('Error', error);
        this.isLoading = false;
      });
  }

  // Retrieves the names of all the Pokémons
  private getAllPokemonsNames(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pokedexService.fetchAllPokemons(this.apiUrl)
        .subscribe((rawData) => {
          resolve(rawData);
        }, (error) => {
          console.log('[ERROR]: [getAllRawPokemons]', error);
          reject(error);
        });
    });
  }

  // Loops through the Pokémons' names and gathers precise information
  private getAllPokemonsInfo(rawData: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const promises = rawData.results.map(async (rawPokemon: any) => {
        return await this.getPokemonData(rawPokemon);
      });
      await Promise.all(promises)
        .then((pokemonslist) => {
          resolve(pokemonslist);
        })
        .catch((error) => {
          console.log('[ERROR]: [getPokemonData]', error);
          reject(error);
        });
    });
  }

  // Retrieves the information of a single Pokémon
  private getPokemonData(rawPokemon: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.pokedexService.fetchPokemonInformation(rawPokemon)
        .subscribe(async (pokeInfo) => {
          const pokemonInformation = await this.processPokemonInformation(pokeInfo);
          resolve(pokemonInformation);
        }, (error) => {
          console.log('[ERROR]: [getPokemonData]', error);
          reject(error);
        });
    });
  }

  private processPokemonInformation(pokeInfo: any): any {
    return {
      info: { id: pokeInfo.id, name: pokeInfo.name, types: pokeInfo.types },
      img: `https://pokeres.bastionbot.org/images/pokemon/${pokeInfo.id}.png`,
      card: this.processType(pokeInfo)[0]
    };
  }

  public seeDetails(pokemon: any): void {
    this.pokedexService.selectedPokemon = pokemon;
    setTimeout(() => {
      this.router.navigateByUrl(`pokemon-details/${pokemon.info.id}`);
    }, 300);
  }

  // public processNames(names: any[]): any[] {
  //   return names.map((x) => `Generation ${x.name.split('-')[1].toUpperCase()}`);
  // }

  public processType(pokemon: any): any {
    return this.typesList.filter(x => x.type.toLowerCase() === pokemon.types[0].type.name);
  }

  public changePage($event: any) {
    const config: ScrollToConfigOptions = { target: 'header' };
    this.currentPage = $event;
    setTimeout(() => {
      this.scrollToService.scrollTo(config);
    }, 1000);
  }
}
