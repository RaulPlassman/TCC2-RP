import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExposureComponent } from './pages/exposure/exposure.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { PolaroidPhotoComponent } from './components/polaroid-photo/polaroid-photo.component';
import { ProjectComponent } from './pages/project/project.component';
import { ParticipantsComponent } from './pages/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    ExposureComponent,
    NavigationHeaderComponent,
    PolaroidPhotoComponent,
    ProjectComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
