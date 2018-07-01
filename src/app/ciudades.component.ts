import { Component, OnInit } from '@angular/core';
import {CiudadesService} from './ciudades.service';
import { Ciudad } from './ciudad';


@Component({
    selector: 'seccion-ciudades',
    templateUrl: './ciudades.component.html',
    
  })

  export class CiudadesComponent implements OnInit{

    climas: any;  
  constructor(private clima: CiudadesService){
  }
  
  ngOnInit(){}
  Clima(ciudad){
    this.clima.getTemperatura(ciudad).subscribe(
      (data: Ciudad[]) => {
        this.climas = data;
        this.climas.main.temp = Math.round((this.climas.main.temp - 273)) ;
        this.climas.main.tempMax = Math.round((this.climas.main.tempMax - 273)) ;
        this.climas.main.tempMin = Math.round((this.climas.main.tempMin - 273)) ;
    }
    );
  }
  
}