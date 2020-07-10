import { Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void { }

  public scrollTo(dest: string): void {
    console.log('DEST', dest);
    const config: ScrollToConfigOptions = { target: dest };
    this.scrollToService.scrollTo(config);
  }
}
