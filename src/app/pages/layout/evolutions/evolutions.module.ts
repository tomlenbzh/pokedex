import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { EvolutionsRoutingModule } from './evolutions-routing.module';
import { EvolutionsComponent } from './evolutions.component';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';

@NgModule({
  declarations: [EvolutionsComponent],
  imports: [
    CommonModule,
    EvolutionsRoutingModule,
    MaterialModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class EvolutionsModule { }
