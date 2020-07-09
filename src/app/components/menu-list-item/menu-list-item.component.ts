// Imports from Angular
import { Component, OnInit, OnDestroy, AfterViewInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';

// Imports from Animations
import { trigger, state, transition, style, animate } from '@angular/animations';

// Imports RXJS
import { Subscription } from 'rxjs';

// Imports from Models
import { NavItem } from '../../models/nav-items.model';

// Imports from Services
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';
// import { NavService } from '../../services/navigation-service/nav.service';


@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(-90deg)' })),
      state('expanded', style({ transform: 'rotate(0deg)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class MenuListItemComponent implements OnInit, OnDestroy, AfterViewInit {

  /* Component variables */
  @Input() navItem: NavItem;
  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @Output() emitIndex: EventEmitter<number> = new EventEmitter();

  public expanded: boolean;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

  constructor(
    private router: Router
  ) { }

  /* ++++++++++++++++++++ Component Life Cycle ++++++++++++++++++++ */

  ngOnInit(): void { }

  ngOnDestroy(): void { }

  ngAfterViewInit(): void { }

  /* ++++++++++++++++++++ Component Methods ++++++++++++++++++++ */

  public navigateToPage() {
    this.router.navigateByUrl(this.navItem.route);
  }
}
