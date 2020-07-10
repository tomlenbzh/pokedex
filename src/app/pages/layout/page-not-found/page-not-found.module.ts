import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../../components/shared.module';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PageNotFoundModule { }
