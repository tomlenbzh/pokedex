import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-error-card',
  templateUrl: './pokemon-error-card.component.html',
  styleUrls: ['./pokemon-error-card.component.scss']
})
export class PokemonErrorCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public goToPokemonList(): void {
    this.router.navigateByUrl('pokemon-list');
  }
}
