import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './_component/about/about.component';
import { ReferenzenComponent } from './_component/referenzen/referenzen.component';
import { HomeComponent } from './_component/home/home.component';
import { ImpressumComponent } from './_component/impressum/impressum.component';
import { DatenschutzComponent } from './_component/datenschutz/datenschutz.component';
import { FormateComponent } from './_atome/formate/formate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'referenzen', component: ReferenzenComponent },
  { path: 'formate', component: FormateComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
