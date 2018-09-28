import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;

  constructor(){

  }

  ngOnInit() {
   /* this.ui.darkMode.subscribe((value) => {
      this.darkModeActive = value;
    });*/
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    //this.ui.darkModeState.next(!this.darkModeActive);
  }
}
