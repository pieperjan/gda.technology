import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit
{

  // ! Small Header
  scrollednavigation: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll()
  {
    this.scrollednavigation = window.scrollY > 0;
  }

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
