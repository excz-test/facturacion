import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas-card',
  templateUrl: './ventas-card.component.html',
  styleUrls: ['./ventas-card.component.css']
})
export class VentasCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public ui: UiService, public router: Router) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  openDetails() {
    this.router.navigateByUrl('/sell');
  }

}
