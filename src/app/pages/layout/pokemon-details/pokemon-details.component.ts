import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonType } from '../../../models/types.model';
import { typeList } from '../../../data/types.data';

import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  isLoading: boolean;
  showHeader: boolean;
  showAbilities: boolean;
  showMoves: boolean;

  pageTitle = 'Pokémon Details';
  pokemonId: number;
  loadingMessage = 'Loading Pokémon details...';
  typesList: PokemonType[] = typeList;
  panelOpenState = false;

  selectedGif = {
    type: '',
    class: ''
  };

  pokemonDetails = {
    img: '',
    abilities: [],
    baseExperience: 0,
    height: 0,
    moves: [],
    sprites: {},
    types: [],
    colour: {},
    weight: 0,
    name: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private pokedexService: PokedexService) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    this.pokemonDetails.img = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonId}.png`;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.showHeader = false;
    this.showAbilities = false;
    this.showMoves = false;
    this.getPokemonDetails();
  }

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

  getPokemonDetails(): void {

    this.pokedexService.fetchPokemonDetails(this.pokemonId).subscribe((pokemonData) => {

      this.pokemonDetails.height = pokemonData.height;
      this.pokemonDetails.weight = pokemonData.weight;
      this.pokemonDetails.baseExperience = pokemonData.base_experience;
      this.pokemonDetails.types = pokemonData.types;
      this.pokemonDetails.sprites = pokemonData.sprites;
      this.pokemonDetails.name = pokemonData.name;

      this.getPokemonAbilities(pokemonData)
        .then(() => {
          console.log('this.pokemonDetails:', this.pokemonDetails);
          this.getPokemonMoves(pokemonData)
            .then(() => {
              console.log('this.pokemonDetails:', this.pokemonDetails);
              this.pokemonDetails.colour = this.processType(this.pokemonDetails);
              this.isLoading = false;
              setTimeout(() => {
                this.showHeader = true;

                setTimeout(() => {
                  this.showAbilities = true;

                  setTimeout(() => {
                    this.showMoves = true;
                  }, 500);
                }, 1500);
              }, 500);
            })
            .catch(() => {
              this.isLoading = false;
            });
        }).catch(() => {
          this.isLoading = false;
        });
    });
  }

  getPokemonMoves(pokemonData: any): Promise<any> {

    return new Promise((resolve, reject) => {

      const moves = [];
      const promises: Promise<any>[] = [];

      console.log('pokemonData', pokemonData);

      pokemonData.moves.forEach((element: any) => {

        const subPromise = new Promise((resolveSub, rejectSub) => {
          this.pokedexService.fetchPokemonAbility(element.move.url).subscribe((res) => {
            const move = { name: element.move.name, detail: res };
            moves.push(move);
          });
          resolveSub();
        });
        promises.push(subPromise);
      });
      Promise.all(promises)
        .then(() => {
          this.pokemonDetails.moves = moves;
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getPokemonAbilities(pokemonData: any): Promise<any> {

    return new Promise((resolve, reject) => {

      console.log('pokemonData', pokemonData);

      const abilities = [];
      const promises: Promise<any>[] = [];

      pokemonData.abilities.forEach((element: any) => {

        const subPromise = new Promise((resolveSub, rejectSub) => {
          this.pokedexService.fetchPokemonAbility(element.ability.url).subscribe((res) => {
            const ability = { name: element.ability.name, detail: res };
            abilities.push(ability);
          });
          resolveSub();
        });
        promises.push(subPromise);
      });
      Promise.all(promises)
        .then(() => {
          this.pokemonDetails.abilities = abilities;
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  clicked($event) {
    console.log('EVENT:', $event);
  }
}
