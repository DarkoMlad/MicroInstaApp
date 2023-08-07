import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPhotos } from '../photos';
import { PhotosService } from '../photos.service';

import { OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
  // selector: 'mi-main-photos',
  templateUrl: './main-photos.component.html',
  styleUrls: ['./main-photos.component.css'],
})
export class MainPhotosComponent {
  pageTitle: string = 'Main Photos';
  errorMessage: string = '';
  closeEditModal: boolean = true;
  paginationPage: number = 1;
  paginationCount: number = 0;
  paginationSize: number = 10;

  photos$ = this.photosService.photos$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private photosService: PhotosService) {}

  onSelected([albumId, photoId]: number[]): void {
    this.photosService.selectedPhotoChanged([albumId, photoId]);
  }

  closeModal(): void {
    this.closeEditModal = !this.closeEditModal;
  }

  // pagination
  paginationChangeDisplayData(event: any) {
    this.paginationPage = event;
  }
}
