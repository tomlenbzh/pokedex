import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollService } from '../../services/scroll.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();

  private window: Window;

  public state = 'hide';
  public navMode = 'over';
  public isOnTop = true;
  public checkSSR: boolean;

  constructor(
    public scrollService: ScrollService,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    if (this.platformService.isPlatformBrowser()) {
      this.window = this.platformService.windowRefService.nativeWindow;
      this.checkSSR = this.platformService.isPlatformBrowser();
    }
  }

  ngAfterViewInit(): void {
    if (this.platformService.isPlatformBrowser()) {
      this.scrollService.setScrollEventListener('scroll', this.onScroll.bind(this), true);
    }
  }

  ngOnDestroy(): void {
    if (this.platformService.isPlatformBrowser()) {
      this.scrollService.removeScrollEventListener('scroll', this.onScroll.bind(this), true);
    }
  }

  // Closes sidenav
  public closeNav(emittedData: string): void {
    if (this.platformService.isPlatformBrowser()) {
      if (emittedData === 'toggle') {
        this.sidenav.toggle();
      }
    }
  }

  // Checks scroll distance from top
  private onScroll(): void {
    if (this.platformService.isPlatformBrowser) {
      this.isOnTop = this.window.scrollY > 50 ? false : true;
    }
  }
}
