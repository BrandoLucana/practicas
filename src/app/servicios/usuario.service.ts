import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, UsuarioCreate } from '../componentes/model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { 
  }

  getUsuarios(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  
  crearUsuario(usuario: UsuarioCreate):Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl,usuario);
  }

}
