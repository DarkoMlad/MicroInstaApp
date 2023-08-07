import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EMPTY, catchError, map, tap } from 'rxjs';
import { IPhotos } from 'src/app/photos';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'mi-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css'],
})
export class EditPhotoComponent {
  errorMessage: string = '';

  formGroup = new FormGroup({
    title: new FormControl<string | undefined>('', [Validators.required]),
  });

  constructor(private photosService: PhotosService) {}

  // editedData!: IPhotos[];

  photos$ = this.photosService.selectedPhoto$.pipe(
    tap((photo) => {
      this.formGroup.controls.title.setValue(photo?.title);
    }),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // editedData$ = this.photos$.pipe(
  //   map((data) => {
  //     this.editedData = JSON.parse(JSON.stringify(data));
  //     return data;
  //   }),
  //   tap((data) => console.log('edited data', data))
  // );

  onSubmit(form: NgForm, photo: IPhotos): void {
    console.log('edit photo on submit');
    if (form.valid) {
      photo.title = this.formGroup.controls.title.value!;

      this.photosService.editPhoto(photo).subscribe({
        next: (photo) => console.log('success', photo),
        error: (error) => console.log('error', error),
      });
    }
  }
}
