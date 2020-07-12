import { Component } from '@angular/core';
import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private platformService: PlatformService) { }

  title = 'Pokédex';
  checkSSR = this.platformService.isPlatformBrowser();
}
