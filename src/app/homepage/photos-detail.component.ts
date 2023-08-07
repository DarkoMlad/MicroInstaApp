import { Component, Input } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';

import { PhotosService } from '../photos.service';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'mi-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.css'],
})
export class PhotosDetailComponent {
  pageTitle: string = 'Photo Detail';
  errorMessage: string = '';
  selectedPhotoIds: number = 0;
  displayModal: boolean = false;
  displayButtons: boolean = false;
  // remove
  bSaveEditedPhoto: boolean = true;
  @Input() inputCloseEditModal!: boolean;

  photos$ = this.photosService.selectedPhoto$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(
    private photosService: PhotosService,
    private confirmService: NgConfirmService
  ) {}

  // in this component, this method is used for closing the opened photo!!!
  onSelected([albumId, photoId]: number[]): void {
    this.photosService.selectedPhotoChanged([albumId, photoId]);
  }

  // when EDIT button is clicked, the modal with edit menu is open
  isEditing(): void {
    this.displayModal = !this.displayModal;
    console.log('display', this.displayModal);
  }

  moreOptions(): void {
    this.displayButtons = true;
  }

  // for closing the modal with edit menu
  closeEditModal_Buttons(): void {
    this.displayModal = false;
    this.displayButtons = false;
  }

  ngOnChanges(): void {
    {
      {
        this.inputCloseEditModal
          ? (this.displayModal = false)
          : (this.displayModal = this.inputCloseEditModal);
      }
    }
  }

  // Delete a photo
  deletePhotoMethod(photoId: number): void {
    this.confirmService.showConfirm(
      'Do you really want to delete this photo?',
      () => {
        this.photosService.deletePhoto(photoId);
        console.log('delete component trigered');
      },
      () => {
        console.log('canceled operation');
      }
    );
  }
}
