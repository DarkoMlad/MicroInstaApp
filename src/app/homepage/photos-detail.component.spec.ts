import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDetailComponent } from './photos-detail.component';

describe('PhotosDetailComponent', () => {
  let component: PhotosDetailComponent;
  let fixture: ComponentFixture<PhotosDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosDetailComponent]
    });
    fixture = TestBed.createComponent(PhotosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
