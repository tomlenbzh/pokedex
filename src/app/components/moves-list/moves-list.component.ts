import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() movesList: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }

  public goToTypeDetails(type: any): void {
    this.router.navigateByUrl(`/type-details/${type.name}`);
  }
}
