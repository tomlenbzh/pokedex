import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { WindowrefService } from './windowref.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    public windowRefService: WindowrefService,
  ) { }

  // Check if on the browser
  public isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
