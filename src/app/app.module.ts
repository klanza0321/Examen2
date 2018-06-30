import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CiudadesComponent} from './ciudades.component';
import {CiudadesService} from './ciudades.service';

//import {MainComponent} from './main.component';

import {RouterModule, PreloadAllModules} from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CiudadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
