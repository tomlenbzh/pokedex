import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDetailHeaderComponent } from './type-detail-header.component';

describe('TypeDetailHeaderComponent', () => {
  let component: TypeDetailHeaderComponent;
  let fixture: ComponentFixture<TypeDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
