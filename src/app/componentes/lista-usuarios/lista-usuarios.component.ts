import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado?: Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: data => this.usuarios = data,
      error: err => console.error('Error cargando usuarios', err)
    });
  }

  verDetalle(usuario: Usuario) {
    this.usuarioSeleccionado = usuario; // abre el modal
  }

  cerrarModal() {
    this.usuarioSeleccionado = undefined; // cierra el modal
  }
}
