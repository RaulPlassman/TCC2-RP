import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExposureComponent } from './pages/exposure/exposure.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { PolaroidPhotoComponent } from './components/polaroid-photo/polaroid-photo.component';
import { ProjectComponent } from './pages/project/project.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { GameOfMemoriesComponent } from './pages/game-of-memories/game-of-memories.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExposureComponent,
    NavigationHeaderComponent,
    PolaroidPhotoComponent,
    ProjectComponent,
    ParticipantsComponent,
    GameOfMemoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
