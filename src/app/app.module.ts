import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PhotoModule } from './homepage/photo.module';
import { PageNotFoundComponent } from './pageNotFoud/page-not-found.component';
import { NewPhotoModule } from './newPhoto/new-photo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'photos', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),

    PhotoModule,
    NewPhotoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
