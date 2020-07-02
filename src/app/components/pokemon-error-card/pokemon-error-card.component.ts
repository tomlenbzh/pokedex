import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-error-card',
  templateUrl: './pokemon-error-card.component.html',
  styleUrls: ['./pokemon-error-card.component.scss']
})
export class PokemonErrorCardComponent implements OnInit {

  @Input() errorMessage: any;
  errorImg = '../../../assets/images/pikachu-error.png';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public goBack(): void {
    this.router.navigateByUrl(`/${this.errorMessage.dest}`);
  }
}
