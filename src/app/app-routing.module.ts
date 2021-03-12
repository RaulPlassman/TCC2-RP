import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './pages/project/project.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { ExposureComponent } from './pages/exposure/exposure.component';

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full'},
  { path: 'project', component: ProjectComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'exposure', component: ExposureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
