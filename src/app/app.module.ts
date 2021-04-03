import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExposureComponent } from './pages/exposure/exposure.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { PolaroidPhotoComponent } from './components/polaroid-photo/polaroid-photo.component';
import { ProjectComponent } from './pages/project/project.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { GameOfMemoriesComponent } from './pages/game-of-memories/game-of-memories.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { WarningComponent } from './pages/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ExposureComponent,
    NavigationHeaderComponent,
    PolaroidPhotoComponent,
    ProjectComponent,
    ParticipantsComponent,
    GameOfMemoriesComponent,
    FooterComponent,
    CardComponent,
    CardGameComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
