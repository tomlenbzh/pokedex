import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { EvolutionService } from '../../../services/evolution.service';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnInit {

  evolutionsList: any[] = [];
  pageTitle: string;
  isLoading: boolean;
  totalRecords: number;
  currentPage: number;

  constructor(
    private titleService: Title,
    private evolutionService: EvolutionService,
    private scrollToService: ScrollToService
  ) {
    this.titleService.setTitle('Evolutions');
    this.pageTitle = 'Evolutions';
    this.currentPage = 1;
  }

  ngOnInit(): void {

    this.isLoading = true;
    this.checkEvolutionsInStorage() === true
      ? (console.log('HAS STORAGE'), this.getEvolutionsFromStorage())
      : (console.log('NO STORAGE'), this.initEvolutionsList());
  }

  private initEvolutionsList(): void {
    this.getAllRawEvolutions()
      .then((evolutions: any) => {
        this.getAllEvolutionTrees(evolutions)
          .then((evolutionsList) => {
            localStorage.setItem('evolutionsList', JSON.stringify(evolutionsList));
            this.totalRecords = evolutionsList.length;
            this.evolutionsList = evolutionsList;
            this.isLoading = false;
          })
          .catch((error) => {
            console.log('[ERROR]', error);
            this.isLoading = false;
          });
      })
      .catch((error) => {
        console.log('[ERROR]', error);
        this.isLoading = false;
      });
  }

  private checkEvolutionsInStorage(): boolean {
    return localStorage.getItem('evolutionsList') !== null ? true : false;
  }

  private getEvolutionsFromStorage(): void {
    const evolutionsList = JSON.parse(localStorage.getItem('evolutionsList'));
    this.totalRecords = evolutionsList.length;
    this.evolutionsList = evolutionsList;
    this.isLoading = false;
  }

  public changePage($event: any) {
    window.scroll(0, 0);
    this.currentPage = $event;
  }

  public getAllRawEvolutions(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.evolutionService.getAllEvolutions()
        .subscribe((evolutionsList) => {
          resolve(evolutionsList);
        }, (error) => {
          console.log('[ERROR] - [getAllRawEvolutions]', error);
          reject(error);
        });
    });
  }

  public getAllEvolutionTrees(evolutionsList: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const evolutions: any[] = [];
      const promises = evolutionsList.results.map(async (evolutionData: any) => {
        evolutions.push(await this.buildEvolutionTree(evolutionData));
      });
      await Promise.all(promises)
        .then(() => {
          resolve(evolutions);
        })
        .catch((error) => {
          console.log('[ERROR]: [getAllEvolutionTrees]', error);
          reject(error);
        });
    });
  }

  public buildEvolutionTree(evolution: any): Promise<any> {


    return new Promise((resolve, reject) => {

      this.evolutionService.getEvolutionTree(evolution.url)
        .subscribe(async (evolutionData) => {

          const evoChain = [];
          let evoData = evolutionData.chain;
          let breakLoop = false;

          while (evoData !== undefined && evoData.hasOwnProperty('evolves_to')) {

            const evoDetails = evoData.evolution_details[0];
            const splitUrl = evoData.species.url.split('/');
            const speciesId = splitUrl[splitUrl.length - 2];

            evoChain.push({
              species_name: evoData.species.name,
              species_id: speciesId,
              img: `https://pokeres.bastionbot.org/images/pokemon/${speciesId}.png`,
              min_level: !evoDetails ? 1 : evoDetails.min_level,
              trigger_name: !evoDetails ? null : evoDetails.trigger.name,
              item: (!evoDetails || evoDetails.trigger.name !== 'use-item') ? null : await this.getPokemonEvolutionItem(evoDetails.item.url)
            });

            if (evoData.evolves_to[0] !== undefined) {
              evoData = evoData.evolves_to[0];
            } else {
              breakLoop = true;
              break;
            }
          }

          if (breakLoop === true) {
            resolve(evoChain);
          }
        }, (error) => {
          reject(error);
        });
    });
  }

  getPokemonEvolutionItem(itemUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.evolutionService.getPokemonEvolutionItem(itemUrl)
        .subscribe((itemInfo) => {
          const item = {
            id: itemInfo.id,
            name: itemInfo.name,
            sprites: itemInfo.sprites
          };
          resolve(item);
        }, (error) => {
          reject(error);
        });
    });
  }
}
