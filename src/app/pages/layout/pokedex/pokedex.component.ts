import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {

  height = window.innerHeight * 0.01;

  constructor() {

    window.addEventListener('resize', () => {
      this.calcVH();
    }, true);

    window.addEventListener('orientationchange', () => {
      this.calcVH();
    }, true);
  }

  calcVH() {
    const vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.getElementById('home-full-height-container').setAttribute('style', `height:${vH}px`);
    document.getElementById('home-full-height-bg').setAttribute('style', `height:${vH}px`);
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
