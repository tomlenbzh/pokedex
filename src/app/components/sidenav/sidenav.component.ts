import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SidenavService } from '../../services/sidenav.service';
import { SubscriptionService } from '../../services/subscription.service';
import { NavItem } from '../../models/nav-items.model';
import { NavItems } from '../../data/nav-items.data';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

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

  constructor(private sidenavService: SidenavService, private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.navItems = NavItems;
    this.sidenavLogo = `../../../assets/images/sidenav/totodile.png`;
    this.overlayElement = document.querySelector('#overlay');
    this.sidenavSubscription = this.sidenavService.isSidnavOpen.subscribe(isSidenavOpen => {
      this.isSidenavOpen = isSidenavOpen;
      console.log('isSidnavOpen', this.sidenavService.isSidnavOpen.value);
      this.lockBody();
    });
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
    this.subscriptionService.unsubscribeAll(this.subscriptionService.checkSubscriptions([this.sidenavSubscription]));
  }

  /* Blocks scroll on body element */
  private lockBody(): void {
    this.isSidenavOpen === true ? disableBodyScroll(this.overlayElement) : enableBodyScroll(this.overlayElement),
      this.sidenavService.sidenavSubject.next(null);
  }

  /* Opens and closes the sidenav */
  public toggleSidenav(value: boolean): void {
    this.sidenavService.isSidnavOpen.next(value);
  }
}
