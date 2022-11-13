import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


export interface Output {
  name: string;
  link: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.sass']
})
export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

navigation: Output[] = [
    {name: 'Angular',link: 'arbeiten'},
    {name: 'WordPress',link: 'arbeiten'},
    {name: 'eCommerce',link: 'arbeiten'},
  ];

  drop(event: CdkDragDrop<Output[]>) {
    moveItemInArray(this.navigation, event.previousIndex, event.currentIndex);
  }
}
