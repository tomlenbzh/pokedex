import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionNodeComponent } from './evolution-node.component';

describe('EvolutionNodeComponent', () => {
  let component: EvolutionNodeComponent;
  let fixture: ComponentFixture<EvolutionNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
