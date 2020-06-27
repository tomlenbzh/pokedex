import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    LazyLoadImageModule,
    ScrollToModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
