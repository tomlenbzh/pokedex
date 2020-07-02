import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class RegionsModule { }
