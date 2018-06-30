import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CiudadesService{
    constructor(private http:HttpClient){

    }

    getCiudades(){
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=2ebb8d634e6ad8b6841eb487bcd37103&id=3601783');// Direccion del API 
    }

}