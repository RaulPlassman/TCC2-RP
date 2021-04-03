import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarningComponent } from './pages/warning/warning.component';
import { ProjectComponent } from './pages/project/project.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { ExposureComponent } from './pages/exposure/exposure.component';
import { GameOfMemoriesComponent } from './pages/game-of-memories/game-of-memories.component';

const routes: Routes = [
  { path: '', component: WarningComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'exposure', component: ExposureComponent },
  { path: 'game-of-memories', component: GameOfMemoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
