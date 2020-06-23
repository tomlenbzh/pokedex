import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {

  // isOpen: boolean;
  // showButtons: boolean;
  // showDev: boolean;
  // windowHeight = ``;
  // dimensions: {
  //   width: string,
  //   height: string,
  // };

  height = window.innerHeight * 0.01;

  constructor() {
    // this.isOpen = false;
    // this.showButtons = false;
    // this.showDev = false;

    window.addEventListener('resize', () => {

      // Get screen size (inner/outerWidth, inner/outerHeight)
      // console.log(`WIDTH: ${window.screen.availWidth}`);
      // console.log(`HEIGHT: ${window.screen.availHeight}`);

      document.documentElement.style.setProperty('--vh', `${this.height}px`);

    }, false);

    window.addEventListener('orientationchange', () => {

      // alert(screen.orientation);
      document.documentElement.style.setProperty('--vh', `${this.height}px`);

    }, false);
  }

  getwindowHeight(): string {
    // const orientation = '(orientation: portrait)';
    // console.log('window.matchMedia(orientation).matches:', window.matchMedia(orientation).matches);
    // return (window.matchMedia(orientation).matches) ? (`${window.innerHeight}px`) : (`${window.innerHeight}px`);
    return '';
  }

  ngOnInit(): void {
    // console.log('this.windowHeight', this.windowHeight);
    // setTimeout(() => {
    //   this.isOpen = true;
    //   setTimeout(() => {
    //     this.showButtons = true;
    //     setTimeout(() => {
    //       this.showDev = true;
    //     }, 2000);
    //   }, 400);
    // }, 100);
  }

  ngAfterViewInit() {
    // window.addEventListener('orientationchange', () => {
    //   this.dimensions = {
    //     width: `${window.innerWidth}px`,
    //     height: `${window.innerHeight}px`
    //   };
    //   console.log('this.dimensions:', this.dimensions);
    // }, false);
  }

  ngAfterViewChecked(): void { }

  ngOnChanges(): void { }

  ngOnDestroy(): void { }
}
