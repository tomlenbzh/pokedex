import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SidenavService } from '../../services/sidenav.service';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @Input() isOnTop: boolean;

  private sidenavSubscription: Subscription;
  private isSidenavOpen: boolean;
  public headerLogo = '../../../assets/images/Pokeball-Home.png';

  constructor(private sidenavService: SidenavService, private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.sidenavSubscription = this.sidenavService.isSidnavOpen.subscribe((value: boolean) => {
      this.isSidenavOpen = value;
    });
  }

  ngOnDestroy(): void {
    const subscriptionsArray = this.subscriptionService.checkSubscriptions([this.sidenavSubscription]);
    this.subscriptionService.unsubscribeAll(subscriptionsArray);
  }

  /* Detects sidenav toggle */
  public toggleSidenav(): void {
    this.sidenavService.isSidnavOpen.next(!this.isSidenavOpen);
  }

}
