import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';

import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MaterialModule,
    SharedModule,
    LazyLoadImageModule
  ]
})
export class PokedexModule { }
