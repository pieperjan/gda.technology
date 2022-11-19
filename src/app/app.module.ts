import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MissionComponent } from './_component/mission/mission.component';
import { VisionComponent } from './_component/vision/vision.component';
import { AboutComponent } from './_component/about/about.component';
import { ProjekteComponent } from './_component/projekte/projekte.component';
import { ChipsComponent } from './_ionen/chips/chips.component';

// ! Material
import {MatChipsModule} from '@angular/material/chips';
import { ContactComponent } from './_atome/contact/contact.component';
import { SidenavComponent } from './_atome/sidenav/sidenav.component';
import { HomeComponent } from './_component/home/home.component';
import { FormateComponent } from './_atome/formate/formate.component';
import { ImpressumComponent } from './_component/impressum/impressum.component';
import { DatenschutzComponent } from './_component/datenschutz/datenschutz.component';


@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    VisionComponent,
    AboutComponent,
    ProjekteComponent,
    ChipsComponent,
    ContactComponent,
    SidenavComponent,
    HomeComponent,
    FormateComponent,
    ImpressumComponent,
    DatenschutzComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
