import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

import { AddNewPhotoComponent } from './add-new-photo.component';

@NgModule({
  declarations: [AddNewPhotoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'newPhoto', component: AddNewPhotoComponent },
    ]),
  ],
})
export class NewPhotoModule {}
