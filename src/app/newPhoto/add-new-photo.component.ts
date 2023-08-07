import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { IPhotos } from '../photos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mi-add-new-photo',
  templateUrl: './add-new-photo.component.html',
  styleUrls: ['./add-new-photo.component.css'],
})
export class AddNewPhotoComponent {
  errorMessage: string = '';

  constructor(private photosService: PhotosService) {}

  myOriginalPhoto: IPhotos = {
    albumId: 0,
    id: 0,
    title: '',
    thumbnailUrl: '',
    url: '',
  };

  myNewPhoto: IPhotos = { ...this.myOriginalPhoto };

  onSubmit(form: NgForm): void {
    console.log('in onSubmit', form.valid);
    if (form.valid) {
      this.photosService.postNewPhoto(this.myNewPhoto).subscribe({
        next: (photo) => console.log('success', photo),
        error: (error) => console.log('error', error),
      });
    }
  }

  discardButton(): void {
    console.log('discard button');
    this.myNewPhoto.albumId = 0;
    this.myNewPhoto.id = 0;
    this.myNewPhoto.title = '';
    this.myNewPhoto.thumbnailUrl = '';
    this.myNewPhoto.url = '';
  }
}
