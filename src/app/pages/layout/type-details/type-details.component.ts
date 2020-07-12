import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.scss']
})
export class TypeDetailsComponent implements OnInit {

  pageTitle: string;
  typeId: string;
  loadingMessage: string;
  typeError: boolean;
  isLoading: boolean;
  typeInfo: any;
  showHeader: boolean;
  showDamage: boolean;
  errorMessage = {
    errorMsg: `An error occurred while fetching this type's information`,
    backMsg: 'Go back to the list of types',
    dest: '/types'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private typesService: TypeService
  ) {
    this.typeError = false;
    this.pageTitle = 'Type Details';
    this.loadingMessage = 'Loadingtype...';
  }

  ngOnInit(): void {
    this.titleService.setTitle('Type Details');
    this.activatedRoute.params.subscribe(params => {
      this.typeId = params.id;
      this.initialiseState();
    });
  }

  private initialiseState(): void {
    this.showHeader = false;
    this.showDamage = false;
    this.isLoading = true;
    this.getTypeInformation()
      .then((result) => {
        this.typeInfo = result;
        this.isLoading = false;
        this.showHeader = true;
        setTimeout(() => {
          this.showDamage = true;
        }, 500);
      })
      .catch((error) => {
        console.log('[ERROR]', error);
        this.typeError = true;
        this.isLoading = false;
      });
  }

  private getTypeInformation(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.typesService.getType(this.typeId)
        .subscribe((result) => {
          resolve(result);
        }, (error) => {
          console.log('[ERROR]', error);
          reject(error);
        });
    });
  }
}
