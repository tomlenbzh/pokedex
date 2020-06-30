import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailHeaderComponent } from './pokemon-detail-header.component';

describe('PokemonDetailHeaderComponent', () => {
  let component: PokemonDetailHeaderComponent;
  let fixture: ComponentFixture<PokemonDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
