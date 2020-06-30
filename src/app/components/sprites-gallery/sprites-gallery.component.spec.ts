import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritesGalleryComponent } from './sprites-gallery.component';

describe('SpritesGalleryComponent', () => {
  let component: SpritesGalleryComponent;
  let fixture: ComponentFixture<SpritesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
