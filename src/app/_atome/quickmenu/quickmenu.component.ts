import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-quickmenu',
  templateUrl: './quickmenu.component.html',
  styleUrls: ['./quickmenu.component.sass']
})
export class QuickmenuComponent implements OnInit {

  // ! Small Header
  scrolledquickmenu: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll()
  {
    this.scrolledquickmenu = window.scrollY > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
