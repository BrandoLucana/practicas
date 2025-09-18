import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ListaUsuariosComponent
  ],
  template: `
    <h1>Gestión de Usuarios</h1>
    <app-lista-usuarios></app-lista-usuarios>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
