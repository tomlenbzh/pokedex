import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

  public state = 'hide';
  public navMode = 'over';
  public isOnTop = true;

  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.scrollService.setScrollEventListener('scroll', this.onScroll.bind(this), true);
  }

  ngOnDestroy(): void {
    this.scrollService.removeScrollEventListener('scroll', this.onScroll.bind(this), true);
  }

  // Closes sidenav
  public closeNav(emittedData: string): void {
    if (emittedData === 'toggle') {
      this.sidenav.toggle();
    }
  }

  // Checks scroll distance from top
  private onScroll(): void {
    this.isOnTop = window.scrollY > 50 ? false : true;
  }

}
