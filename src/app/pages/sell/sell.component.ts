import { Component, OnInit } from '@angular/core';
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  listadoFacturas: Factura[];

  constructor() { }

  ngOnInit() {
    
  }

}
