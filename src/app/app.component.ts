import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gda.technology';

  public isShowDiv = false;    
  toggleSidenav() {  
    this.isShowDiv = !this.isShowDiv; 
    console.log(this.isShowDiv); 
  }  

}

