import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  window: Window;

  constructor(
    private platformService: PlatformService,
    private scrollToService: ScrollToService
  ) {
    this.window = this.platformService.windowRefService.nativeWindow;
  }

  // Binds an event listener to a type and a function
  public setScrollEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      this.window.addEventListener(type, listener, options);
    }
  }

  // Removes an existing event listener
  public removeScrollEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      this.window.removeEventListener(type, listener, options);
    }
  }

  // Scrolls to target in page
  public triggerScrollTo(target: any, duration: number, offset: number): void {
    const config: ScrollToConfigOptions = { target, duration, offset };
    this.scrollToService.scrollTo(config);
  }
}
