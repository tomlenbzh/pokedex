import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TypeService } from '../../../services/type.service';
import { PokemonType } from '../../../models/types.model';
import { typeList } from '../../../data/types.data';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  pageTitle: string;
  isLoading: boolean;
  typesList: any[] = [];
  typesClasses: PokemonType[] = typeList;

  constructor(
    private titleService: Title,
    private typeService: TypeService,
    private router: Router
  ) {
    this.pageTitle = 'Types';
  }

  ngOnInit(): void {
    this.titleService.setTitle('Types');
    this.isLoading = true;
    this.getAllTypes()
      .then((allTypes: any) => {
        this.typesList = allTypes.results;
        this.isLoading = false;
      }).catch((error) => {
        console.log('[ERROR] [getAllTypes]', error);
        this.isLoading = false;
      });
  }

  private getAllTypes(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.typeService.getAllTypes()
        .subscribe((allTypes: any) => {
          this.typesList = allTypes;
          resolve(allTypes);
        }, (error) => {
          reject(error);
        });
    });
  }

  public getType(type: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.typeService.getType(type.url)
        .subscribe((typeInfo: any) => {
          resolve(typeInfo);
        }, (error) => {
          reject(error);
        });
    });
  }

  public getTypeIcon(type: string): string {
    return `assets/images/types/icons/${type}.png`;
  }

  public processType(type: any): any {
    return this.typesClasses.filter(x => x.class.toLowerCase().includes(type.name));
  }

  public goToTypeDetails(type: any): void {
    this.router.navigateByUrl(`/type-details/${type.name}`);
  }
}
