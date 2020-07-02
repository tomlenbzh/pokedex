import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDetailCardComponent } from './type-detail-card.component';

describe('TypeDetailCardComponent', () => {
  let component: TypeDetailCardComponent;
  let fixture: ComponentFixture<TypeDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
