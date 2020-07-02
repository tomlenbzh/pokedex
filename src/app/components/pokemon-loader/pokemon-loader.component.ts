import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-loader',
  templateUrl: './pokemon-loader.component.html',
  styleUrls: ['./pokemon-loader.component.scss']
})
export class PokemonLoaderComponent implements OnInit {

  @Input() message: string;
  loaderImg = '../../../assets/images/Pikachu-Loader.png';

  constructor() { }

  ngOnInit(): void { }

}
