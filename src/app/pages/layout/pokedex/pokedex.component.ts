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
  windowHeight = ``;

  constructor() {
    this.isOpen = false;
    this.showButtons = false;
    this.showDev = false;
  }

  getwindowHeight(): string {
    const orientation = '(orientation: portrait)';
    return (window.matchMedia(orientation).matches) ? (`${window.innerHeight}px`) : (`${window.innerHeight}px`);
  }

  ngOnInit(): void {
    console.log('this.windowHeight', this.windowHeight);
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
