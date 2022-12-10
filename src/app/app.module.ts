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
import { LogoComponent } from './_atome/logo/logo.component';
import { QuickmenuComponent } from './_atome/quickmenu/quickmenu.component';
import { NavigationComponent } from './_atome/navigation/navigation.component';
import { LeistungenComponent } from './_atome/leistungen/leistungen.component';
import { ReferenzenComponent } from './_component/referenzen/referenzen.component';


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
    LogoComponent,
    QuickmenuComponent,
    NavigationComponent,
    LeistungenComponent,
    ReferenzenComponent,

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
