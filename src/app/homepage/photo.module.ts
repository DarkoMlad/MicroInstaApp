import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgConfirmModule } from 'ng-confirm-box';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared/shared.module';

import { MainPhotosComponent } from './main-photos.component';
import { PhotosDetailComponent } from './photos-detail.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

@NgModule({
  declarations: [
    MainPhotosComponent,
    PhotosDetailComponent,
    EditPhotoComponent,
  ],
  imports: [
    NgConfirmModule,
    NgxPaginationModule,
    RouterModule.forChild([{ path: 'photos', component: MainPhotosComponent }]),
    SharedModule,
  ],
})
export class PhotoModule {}
