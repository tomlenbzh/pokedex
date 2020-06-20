import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {

  isOpen: boolean;
  showButtons: boolean;
  showDev: boolean;

  constructor() {
    this.isOpen = false;
    this.showButtons = false;
    this.showDev = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = true;
      setTimeout(() => {
        this.showButtons = true;
        setTimeout(() => {
          this.showDev = true;
        }, 2000);
      }, 400);
    }, 100);
  }
}
