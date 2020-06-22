import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {

  isOpen: boolean;
  showButtons: boolean;
  showDev: boolean;
  windowHeight: any;

  constructor() {
    this.isOpen = false;
    this.showButtons = false;
    this.showDev = false;
    this.windowHeight = window.innerHeight;

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

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit() { }

  ngOnChanges() {
  }
}
