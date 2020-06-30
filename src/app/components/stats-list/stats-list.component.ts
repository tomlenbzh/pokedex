import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.scss']
})
export class StatsListComponent implements OnInit {

  @Input() statsList: any;

  constructor() { }

  ngOnInit(): void { }
}
