import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDetailsRoutingModule } from './type-details-routing.module';
import { TypeDetailsComponent } from './type-details.component';


@NgModule({
  declarations: [TypeDetailsComponent],
  imports: [
    CommonModule,
    TypeDetailsRoutingModule
  ]
})
export class TypeDetailsModule { }
