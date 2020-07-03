import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void { }

}
