import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleEvolutions, RotateIcon } from '../../animations/evolutions.animation';

@Component({
  selector: 'app-evolution-tree',
  templateUrl: './evolution-tree.component.html',
  styleUrls: ['./evolution-tree.component.scss'],
  animations: [
    ToggleEvolutions,
    RotateIcon,
  ]
})
export class EvolutionTreeComponent implements OnInit {

  @Input() evolutionTree: any;
  showEvolutions: boolean;

  constructor() {
    this.showEvolutions = false;
  }

  ngOnInit(): void {
    console.log('EVOLUTION TREE:', this.evolutionTree);
  }

  public toggleEvolutionTree(): void {
    this.showEvolutions = !this.showEvolutions;
  }

  public isFirstPokemon(pokemon: any): boolean {
    return (pokemon.min_level === 1 && pokemon.trigger_name === null) ? true : false;
  }
}
