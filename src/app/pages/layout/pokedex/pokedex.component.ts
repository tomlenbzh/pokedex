import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {

  height = window.innerHeight * 0.01;
  boxes = {
    pokemons: {
      title: 'Pokémons',
      subtitle: `Browse through your favourite Pokémons`,
      route: 'pokemon-list',
      bg: '../../../assets/images/boxes/pokemons-background.png'
    },
    evolutions: {
      title: 'Evolutions',
      subtitle: `Discover your Pokémons' evolutions`,
      route: 'evolutions',
      bg: '../../../assets/images/boxes/evolutions-background.png'
    },
    types: {
      title: 'Types',
      subtitle: `Discover the type of each Pokémon`,
      route: 'types',
      bg: '../../../assets/images/boxes/types.png'
    },
    regions: {
      title: 'Regions',
      subtitle: `Discover the world of Pokémon`,
      route: 'regions',
      bg: '../../../assets/images/boxes/regions-background.png'
    },
  };

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {

    this.pokedexService.hasStorageSearchInfo()
      ? (console.log('HAS DATA'))
      : (
        console.log('NO DATA'),
        this.initPokemons().then((pokemonslist) => {
          this.pokedexService.setStorageSearchInfo(pokemonslist);
        }).catch((error) => {
          console.log('[ERROR]:', error);
        })
      );
  }

  private initPokemons(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.getRawPokemonList()
        .then((rawData) => {
          this.getAllPokemonsInfo(rawData)
            .then((pokemonslist: any) => {

              resolve(pokemonslist);
            })
            .catch((error) => {
              console.log('Error', error);
              reject(error);
            });
        }).catch((error) => {
          console.log('[ERROR]:', error);
        });
    });
  }

  private getRawPokemonList(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.pokedexService.fetchAllPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
        .subscribe((rawData) => {
          resolve(rawData);
        }, (error) => {
          reject(error);
        });
    });
  }

  // Loops through the Pokémons' names and gathers precise information
  private getAllPokemonsInfo(rawData: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const promises = rawData.results.map(async (rawPokemon: any) => {
        return await this.processPokemonInformation(rawPokemon);
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

  private processPokemonInformation(pokeInfo: any): any {
    return {
      name: pokeInfo.name,
      img: `https://pokeres.bastionbot.org/images/pokemon/${pokeInfo.id}.png`,
    };
  }
}

