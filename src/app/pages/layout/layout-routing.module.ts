import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { PokedexGuard } from '../../guards/pokedex.guard';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'pokedex',
      loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
    },
    {
      path: 'pokemon-list',
      loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule),
      canActivate: [PokedexGuard]
    },
    {
      path: 'pokemon-details/:id',
      loadChildren: () => import('./pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsModule)
    },
    {
      path: 'evolutions',
      loadChildren: () => import('./evolutions/evolutions.module').then(m => m.EvolutionsModule)
    },
    {
      path: 'types',
      loadChildren: () => import('./types/types.module').then(m => m.TypesModule)
    },
    {
      path: 'type-details/:id',
      loadChildren: () => import('./type-details/type-details.module').then(m => m.TypeDetailsModule)
    },
    {
      path: 'regions',
      loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule)
    },
    {
      path: '', redirectTo: 'pokedex', pathMatch: 'full'
    },
    {
      path: '**',
      loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
