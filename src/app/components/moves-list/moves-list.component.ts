import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() movesList: any;

  constructor() { }

  ngOnInit(): void { }

  public getTypeIcon(type: string): string {
    return `assets/images/types/${type}.png`;
  }
}
