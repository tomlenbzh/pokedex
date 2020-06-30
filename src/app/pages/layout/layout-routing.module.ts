import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'pokedex', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
    { path: 'pokemon-list', loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule) },
    { path: 'evolutions', loadChildren: () => import('./evolutions/evolutions.module').then(m => m.EvolutionsModule) },
    {
      path: 'pokemon-details/:id', loadChildren: () => import('./pokemon-details/pokemon-details.module')
        .then(m => m.PokemonDetailsModule)
    },
    { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
