import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionComponent } from './_component/mission/mission.component';
import { VisionComponent } from './_component/vision/vision.component';
import { AboutComponent } from './_component/about/about.component';
import { ProjekteComponent } from './_component/projekte/projekte.component';
import { HomeComponent } from './_component/home/home.component';
import { FormateComponent } from './_atome/formate/formate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'arbeiten', component: ProjekteComponent },
  { path: 'formate', component: FormateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
