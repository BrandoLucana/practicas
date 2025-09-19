import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { Usuario } from './componentes/model/usuario.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,         
    ListaUsuariosComponent,
    DetalleUsuarioComponent
  ],
  template: `
    <h1>Gestión de Usuarios</h1>

   s <app-lista-usuarios>
    </app-lista-usuarios>

    <app-detalle-usuario
      *ngIf="usuarioSeleccionado"
      [usuario]="usuarioSeleccionado">
    </app-detalle-usuario>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioSeleccionado: Usuario | null = null;

  onUsuarioSeleccionado(usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
  }
}
