import { Component } from '@angular/core';
//haciedo uso del componente NavController que ya viene en angular
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    //creado una isntancia de NavController
    public NavCont: NavController 
  ) {}
    //creando metodo para desprazar a la ventana actualizar
    getActualizar(){
      this.NavCont.navigateForward('actualizar');
    }
}
