import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaroidPhotoComponent } from './polaroid-photo.component';

describe('PolaroidPhotoComponent', () => {
  let component: PolaroidPhotoComponent;
  let fixture: ComponentFixture<PolaroidPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolaroidPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaroidPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
