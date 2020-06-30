import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionTreeComponent } from './evolution-tree.component';

describe('EvolutionTreeComponent', () => {
  let component: EvolutionTreeComponent;
  let fixture: ComponentFixture<EvolutionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
