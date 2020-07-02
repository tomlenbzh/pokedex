import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { RegionsService } from '../../../services/regions.service';
import { ToggleRegion, RotateIcon } from '../../../animations/regions.animation';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  animations: [
    ToggleRegion,
    RotateIcon,
  ]
})
export class RegionsComponent implements OnInit {

  isLoading: boolean;
  pageTitle: string;
  loadingMessage: string;
  regionsList: any[] = [];
  regionsError: boolean;
  showRegion: boolean;
  showRegions: boolean;
  errorMessage = {
    errorMsg: `An error occurred while fetching the different regions`,
    backMsg: 'Go back to the Pokédex',
    dest: '/pokedex'
  };

  constructor(
    private titleService: Title,
    private router: Router,
    private regionsService: RegionsService
  ) {
    this.titleService.setTitle('Regions');
    this.pageTitle = 'Regions';
    this.loadingMessage = 'Loading regions...';
  }

  ngOnInit(): void {
    this.initialiseState();
  }

  public showRegionDetail(): void {
    this.showRegion = !this.showRegion;
  }

  public getRegionImage(region: string): string {
    return `assets/images/regions/${region}.png`;
  }

  private initialiseState(): void {
    this.isLoading = true;
    this.showRegion = false;
    this.getAllRegions()
      .then((result: any) => {
        this.getAllRegionsInfo(result)
          .then((pokemonslist: any) => {
            this.regionsList = pokemonslist;
            console.log('this.regionsList', this.regionsList);
            this.isLoading = false;
            this.showRegions = true;
          })
          .catch((error) => {
            console.log('[ERROR]', error);
            this.regionsError = true;
            this.isLoading = false;
          });
      })
      .catch((error: any) => {
        console.log('[ERROR]', error);
        this.regionsError = true;
        this.isLoading = false;
      });
  }

  private getAllRegions(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.regionsService.getAllRegions()
        .subscribe((allregions: any) => {
          resolve(allregions);
        }, (error) => {
          reject(error);
        });
    });
  }

  private getAllRegionsInfo(rawData: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const promises = rawData.results.map(async (rawPokemon: any) => {
        return await this.getRegion(rawPokemon);
      });
      await Promise.all(promises)
        .then((regionsList) => {
          resolve(regionsList);
        })
        .catch((error) => {
          console.log('[ERROR]: [getAllRegionsInfo]', error);
          reject(error);
        });
    });
  }

  private getRegion(region: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.regionsService.getRegion(region.name)
        .subscribe((regionInfo: any) => {
          resolve(regionInfo);
        }, (error) => {
          reject(error);
        });
    });
  }

}
