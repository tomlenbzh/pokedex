import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokedexService } from '../services/pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexGuard implements CanActivate {

  constructor(public pokedexService: PokedexService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.pokedexService.hasStorageSearchInfo()) {
      return true;
    } else {
      this.router.navigateByUrl('pokedex');
      return false;
    }
  }
}
