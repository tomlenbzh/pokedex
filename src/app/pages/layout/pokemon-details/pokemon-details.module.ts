import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';

import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class PokemonDetailsModule { }
