import { Component } from '@angular/core';
//haciedo uso del componente NavController que ya viene en angular
import {NavController} from '@ionic/angular';

import { Observable } from 'rxjs';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  alumnos: Observable<any>;

  constructor(
    private restSer: ServicioService,
    //creado una isntancia de NavController
    public NavCont: NavController 
  ) {
    this.alumnos = this.restSer.GetAlumnos();//se estrae todo el registro alumnos
  }
    //creando metodo para desprazar a la ventana actualizar
    getActualizar(){
      this.NavCont.navigateForward('actualizar');
    }
}
