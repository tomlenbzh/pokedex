import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';

import { SharedModule } from '../../../components/shared.module';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class TypesModule { }
