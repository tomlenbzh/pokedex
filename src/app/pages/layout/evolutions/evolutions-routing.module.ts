import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvolutionsComponent } from './evolutions.component';

const routes: Routes = [{ path: '', component: EvolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvolutionsRoutingModule { }
