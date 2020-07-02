import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDetailsRoutingModule } from './type-details-routing.module';
import { TypeDetailsComponent } from './type-details.component';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';

@NgModule({
  declarations: [TypeDetailsComponent],
  imports: [
    CommonModule,
    TypeDetailsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TypeDetailsModule { }
