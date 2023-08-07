import { Injectable } from '@angular/core';
import { IPhotos } from './photos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  combineLatest,
  map,
  of,
  shareReplay,
  take,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private _photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  // 'https://jsonplaceholder.typicode.com/photos?_start=5&_limit=20';
  // private _photosUrl = './api/photos/photos.json';

  constructor(private http: HttpClient) {}

  photos$ = this.http.get<IPhotos[]>(this._photosUrl).pipe(
    tap((data) => console.log('All', JSON.stringify(data))),
    // map((data) => data.slice(0, 10)),
    catchError(this.handleError)
  );

  // 1 Creating an Action stream
  private photoSelectedSubject = new BehaviorSubject<number[]>([0.0]);
  photoSelectedAction$ = this.photoSelectedSubject.asObservable();

  // 2 Combining Action stream with Data stream
  selectedPhoto$ = combineLatest([
    this.photos$,
    this.photoSelectedAction$,
  ]).pipe(
    map(([photos, [selectedPhotoAlbumId, selectedPhotoId]]) =>
      photos.find(
        (photo) =>
          photo.albumId === selectedPhotoAlbumId && photo.id === selectedPhotoId
      )
    ),
    tap((photo) => console.log('selectedPhoto', photo)),
    shareReplay(1)
  );

  selectedPhotoChanged([
    selectedPhotoAlbumId,
    selectedPhotoId,
  ]: number[]): void {
    this.photoSelectedSubject.next([selectedPhotoAlbumId, selectedPhotoId]);
  }

  editPhoto(editedPhoto: IPhotos): Observable<any> {
    return this.http.put(`${this._photosUrl}/${editedPhoto.id}`, editedPhoto);
  }

  // add new photo
  postNewPhoto(myNewPhoto: IPhotos): Observable<any> {
    return this.http.post(this._photosUrl, myNewPhoto);
  }

  // delete photo
  deletePhoto(photoId: number): void {
    console.log('delete service trigered', `${this._photosUrl}/${photoId}`);
    this.http.delete<void>(`${this._photosUrl}/${photoId}`).subscribe();
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Sever returned code: ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
