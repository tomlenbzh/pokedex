import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SidenavService } from '../../services/sidenav.service';
import { SubscriptionService } from '../../services/subscription.service';
import { NavItem } from '../../models/nav-items.model';
import { NavItems } from '../../data/nav-items.data';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  private overlayElement = null;
  private sidenavSubscription: Subscription;

  public selectedItemIndex: number;
  public isSidenavOpen: boolean;
  public sidenavLogo: string;
  public navItems: NavItem[];
  private document: Document;

  constructor(
    private sidenavService: SidenavService,
    private subscriptionService: SubscriptionService,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    if (this.platformService.isPlatformBrowser) {
      this.document = this.platformService.windowRefService.nativeWindow.document;
      this.navItems = NavItems;
      this.sidenavLogo = `../../../assets/images/sidenav/totodile.png`;
      this.overlayElement = this.document.querySelector('#overlay');
      this.sidenavSubscription = this.sidenavService.isSidnavOpen.subscribe(isSidenavOpen => {
        this.isSidenavOpen = isSidenavOpen;
        this.lockBody();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.platformService.isPlatformBrowser) {
      clearAllBodyScrollLocks();
      this.subscriptionService.unsubscribeAll(this.subscriptionService.checkSubscriptions([this.sidenavSubscription]));
    }
  }

  /* Blocks scroll on body element */
  private lockBody(): void {
    if (this.platformService.isPlatformBrowser) {
      this.isSidenavOpen === true ? disableBodyScroll(this.overlayElement) : enableBodyScroll(this.overlayElement),
        this.sidenavService.sidenavSubject.next(null);
    }
  }

  /* Opens and closes the sidenav */
  public toggleSidenav(value: boolean): void {
    if (this.platformService.isPlatformBrowser) {
      this.sidenavService.isSidnavOpen.next(value);
    }
  }
}
