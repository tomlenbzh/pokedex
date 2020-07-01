import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'pokedex', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
    { path: 'pokemon-list', loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule) },
    {
      path: 'pokemon-details/:id', loadChildren: () => import('./pokemon-details/pokemon-details.module')
        .then(m => m.PokemonDetailsModule)
    },
    { path: 'evolutions', loadChildren: () => import('./evolutions/evolutions.module').then(m => m.EvolutionsModule) },
    { path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule) },
    { path: 'type-details/:id', loadChildren: () => import('./type-details/type-details.module').then(m => m.TypeDetailsModule) },
    { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
