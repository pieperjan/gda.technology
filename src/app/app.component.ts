import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent
{
  title = 'gda.technology';

  public isShowDiv = false;

  toggleSidenav()
  {
    this.isShowDiv = !this.isShowDiv;
    console.log(this.isShowDiv);
  }

  // ! Small Header
  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll()
  {
    this.scrolled = window.scrollY > 0;
  }

}


