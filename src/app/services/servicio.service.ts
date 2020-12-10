import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//para una peticion asincrona
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  //instanciando HttpClient
  constructor(private httpCli: HttpClient) { }

  //creamos una funcion llamada GetAutor
  GetAlumnos(): Observable<any>{
    return this.httpCli.get('http://localhost/phpmyadmin/sql.php?server=1&db=l4&table=alumnos&pos=0');
  }
  //metodo con el identificador id
  GetAlumno(id): Observable<any>{
    return this.httpCli.get('http://localhost/phpmyadmin/sql.php?server=1&db=l4&table=autor&pos=0'+id);
  }
}
