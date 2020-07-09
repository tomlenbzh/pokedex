import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() movesList: any;
  isLoading: boolean;
  editedMovesList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getTypesIcons();
  }

  private getTypesIcons(): void {
    this.editedMovesList = this.movesList.map((x: any) => {
      return { data: x, img: `assets/images/types/${x.detail.type.name}.png` };
    });
    this.isLoading = false;
  }

  public goToTypeDetails(type: any): void {
    this.router.navigateByUrl(`/type-details/${type.name}`);
  }
}
