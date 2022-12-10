import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {

  // ! Small Header
  scrolledlogo: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll()
  {
    this.scrolledlogo = window.scrollY > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
