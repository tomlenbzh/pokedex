import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PokemonListCardComponent } from './pokemon-list-card/pokemon-list-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PokemonLoaderComponent } from './pokemon-loader/pokemon-loader.component';

@NgModule({
  declarations: [
    PokemonListCardComponent,
    PageHeaderComponent,
    PokemonLoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    InfiniteScrollModule,
    LazyLoadImageModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [
    PokemonListCardComponent,
    PageHeaderComponent,
    PokemonLoaderComponent
  ],
  exports: [
    PokemonListCardComponent,
    PageHeaderComponent,
    PokemonLoaderComponent
  ]
})
export class SharedModule { }
