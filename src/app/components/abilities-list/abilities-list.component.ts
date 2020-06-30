import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss']
})
export class AbilitiesListComponent implements OnInit {

  @Input() abilitiesList: any;

  constructor() { }

  ngOnInit(): void { }

}
