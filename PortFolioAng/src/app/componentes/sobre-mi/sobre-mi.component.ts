import { Component, OnInit } from '@angular/core';

import { PorfolioService } from 'src/app/service/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{



  interesesList:any;
  datosList:any;
  constructor( private datosPorfolio:PorfolioService){ }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.datosList = data.datos; 
  })
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.interesesList = data.intereses; 
  })
  }


}

