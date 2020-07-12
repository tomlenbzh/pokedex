import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PokedexService } from '../../../services/pokedex.service';
import { PokemonType } from '../../../models/types.model';
import { typeList } from '../../../data/types.data';
import { startWith, map } from 'rxjs/operators';
import { PlatformService } from '../../../services/platform.service';

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
  typesList: PokemonType[] = typeList;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  /* ++++++++++ */

  totalRecords: number;
  currentPage: number;
  pagesNumber: number;
  pokemonsPerPage: number;
  lastPokemon: number;
  hasNext: boolean;
  firstRequest: boolean;
  searchList: any;

  window: Window;

  constructor(
    private pokedexService: PokedexService,
    private titleService: Title,
    private router: Router,
    private platformService: PlatformService
  ) {

    this.currentPage = this.pokedexService.currentPage;
    this.pokemonsPerPage = 50;
    this.lastPokemon = 0;
    this.totalRecords = 807;
  }

  ngOnInit(): void {
    this.pageTitle = 'All Pokémons';
    this.titleService.setTitle(this.pageTitle);

    if (this.platformService.isPlatformBrowser()) {
      this.window = this.platformService.windowRefService.nativeWindow;
      this.searchList = this.pokedexService.getStorageSearchInfo();
      this.isLoading = true;

      this.firstRequest = true;
      this.initPokemons(this.currentPage)
        .then(() => {
          this.isLoading = false;
        }).catch((error) => {
          console.log('[ERROR]:', error);
          this.isLoading = false;
        });

      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterOptions(value))
        );
    }
  }

  ngOnDestroy(): void { }

  private buildApiUrl(limit: number, offset: number): string {
    return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
  }

  private getOffset(newPage: number): number {
    return (newPage - 1) * this.pokemonsPerPage;
  }

  private initPokemons(page: number): Promise<any> {

    return new Promise((resolve, reject) => {
      this.getRawPokemonList(page)
        .then((rawData) => {
          this.getAllPokemonsInfo(rawData)
            .then((pokemonslist: any) => {
              this.pokemonsList = pokemonslist;
              this.firstRequest = false;
              resolve(pokemonslist);
            })
            .catch((error) => {
              console.log('[Error]', error);
              reject(error);
            });
        }).catch((error) => {
          console.log('[ERROR]:', error);
        });
    });
  }

  public changePage($event: any) {

    this.pokedexService.currentPage = $event;
    this.currentPage = this.pokedexService.currentPage;
    this.isLoading = true;
    if (this.platformService.isPlatformBrowser) {
      this.window.scroll(0, 0);
    }

    this.initPokemons(this.currentPage)
      .then(() => {
        this.isLoading = false;
      }).catch((error) => {
        console.log('[ERROR]:', error);
        this.isLoading = false;
      });
  }

  private getRemainingPokemons(offset: number): number {
    return this.totalRecords - offset;
  }

  private getRawPokemonList(currentPage: number): Promise<any> {

    return new Promise((resolve, reject) => {
      const newOffset = this.getOffset(currentPage);
      const newApiUrl = currentPage !== 17
        ? this.buildApiUrl(this.pokemonsPerPage, newOffset)
        : this.buildApiUrl(this.getRemainingPokemons(newOffset), newOffset);

      this.pokedexService.fetchPokemonRange(newApiUrl)
        .subscribe((rawData) => {
          resolve(rawData);
        }, (error) => {
          reject(error);
        });
    });
  }

  private filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchList.filter((option: any) => option.name.toLowerCase().includes(filterValue));
  }

  public submitFilter(filterdValue: any): void {
    const filterExist = this.searchList.filter((option: any) => option.name.toLowerCase() === filterdValue);
    filterExist.length > 0
      ? this.seeDetails(filterExist[0]?.name)
      : console.log('NO MATCH');
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

  public seeDetails(pokemonId: any): void {
    this.pokedexService.selectedPokemon = pokemonId;
    setTimeout(() => {
      this.router.navigateByUrl(`pokemon-details/${pokemonId}`);
    }, 300);
  }

  public processType(pokemon: any): any {
    return this.typesList.filter(x => x.type.toLowerCase() === pokemon.types[0].type.name);
  }
}
