import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonErrorCardComponent } from './pokemon-error-card.component';

describe('PokemonErrorCardComponent', () => {
  let component: PokemonErrorCardComponent;
  let fixture: ComponentFixture<PokemonErrorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonErrorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonErrorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
