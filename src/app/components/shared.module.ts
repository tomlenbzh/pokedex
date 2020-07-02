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
import { EvolutionTreeComponent } from './evolution-tree/evolution-tree.component';
import { EvolutionNodeComponent } from './evolution-node/evolution-node.component';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { PokemonDetailHeaderComponent } from './pokemon-detail-header/pokemon-detail-header.component';
import { MovesListComponent } from './moves-list/moves-list.component';
import { StatsListComponent } from './stats-list/stats-list.component';
import { SpritesGalleryComponent } from './sprites-gallery/sprites-gallery.component';
import { PokemonErrorCardComponent } from './pokemon-error-card/pokemon-error-card.component';
import { TypeDetailHeaderComponent } from './type-detail-header/type-detail-header.component';
import { TypeDetailCardComponent } from './type-detail-card/type-detail-card.component';
import { RegionCardComponent } from './region-card/region-card.component';

@NgModule({
  declarations: [
    PokemonListCardComponent,
    PageHeaderComponent,
    PokemonLoaderComponent,
    EvolutionTreeComponent,
    EvolutionNodeComponent,
    AbilitiesListComponent,
    MovesListComponent,
    PokemonDetailHeaderComponent,
    StatsListComponent,
    SpritesGalleryComponent,
    PokemonErrorCardComponent,
    TypeDetailHeaderComponent,
    TypeDetailCardComponent,
    RegionCardComponent,
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
    PokemonLoaderComponent,
    EvolutionTreeComponent,
    AbilitiesListComponent,
    MovesListComponent,
    PokemonDetailHeaderComponent,
    StatsListComponent,
    SpritesGalleryComponent,
    PokemonErrorCardComponent,
    TypeDetailHeaderComponent,
    TypeDetailCardComponent,
    RegionCardComponent
  ],
  exports: [
    PokemonListCardComponent,
    PageHeaderComponent,
    PokemonLoaderComponent,
    EvolutionTreeComponent,
    AbilitiesListComponent,
    MovesListComponent,
    PokemonDetailHeaderComponent,
    StatsListComponent,
    SpritesGalleryComponent,
    PokemonErrorCardComponent,
    TypeDetailHeaderComponent,
    TypeDetailCardComponent,
    RegionCardComponent
  ]
})
export class SharedModule { }
