import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario, UsuarioCreate } from '../model/usuario.model';


@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado?: Usuario;


  // Modelo para formulario (propiedad de clase, no const)
  nuevoUsuario: UsuarioCreate = {
    name: '',
    username: '',
    email: ''
    // los demás campos son opcionales
  };


  constructor(private usuarioService: UsuarioService) {}


  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error cargando usuarios', err)
    });
  }


  verDetalle(usuario: Usuario) {
    this.usuarioSeleccionado = usuario; // abre modal
  }


  cerrarModal() {
    this.usuarioSeleccionado = undefined; // cierra modal
  }


  crearUsuario() {
    this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe({
      next: (usuarioCreado) => {
        this.usuarios.push(usuarioCreado); // lo agrega a la lista
        this.nuevoUsuario = { name: '', username: '', email: '' }; // limpia formulario
      },
      error: (err) => console.error('Error creando usuario', err)
    });
  }
}



