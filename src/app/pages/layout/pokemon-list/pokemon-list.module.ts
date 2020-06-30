import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';

import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FilterPokemonPipe } from '../../../pipes/pokemon.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PokemonListComponent,
    FilterPokemonPipe
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
    ScrollingModule,
    NgxSpinnerModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class PokemonListModule { }
