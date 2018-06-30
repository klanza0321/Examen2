import { Component, OnInit } from '@angular/core';
import {CiudadesService} from './ciudades.service';
import { Ciudad } from './ciudad';


@Component({
    selector: 'seccion-ciudades',
    templateUrl: './ciudades.component.html',
    
  })

  export class CiudadesComponent implements OnInit{

    ciudad: Ciudad;
    ciudades: Ciudad[] = [];
    

    constructor(private ciudadesService: CiudadesService) {
        console.log('constructor');

    }
    ngOnInit() {
        console.log('ng on init');
        this.ciudadesService.getCiudades().subscribe(
          (data: Ciudad[]) =>{
          this.ciudades = data;
        },
      (error)=> {
        window.alert('Error al recuperar del API');
      });
      }

  }
  