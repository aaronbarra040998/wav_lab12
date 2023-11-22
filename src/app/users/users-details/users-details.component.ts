// users-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  usuario: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtén el ID del usuario desde la URL
    const userId = this.route.snapshot.paramMap.get('id');

    // Suponiendo que tienes un servicio o un array 'usuarios' disponible
    // Cambia esta lógica según tu implementación real
    const usuarios = [
      { id: 1, nombre: 'Usuario 1', detalle: 'Detalles del Usuario 1' },
      { id: 2, nombre: 'Usuario 2', detalle: 'Detalles del Usuario 2' },
      { id: 3, nombre: 'Usuario 3', detalle: 'Detalles del Usuario 3' },
      // ... más usuarios
    ];

    // Encuentra al usuario con el ID correspondiente
    this.usuario = usuarios.find(user => user.id === Number(userId));

    if (!this.usuario) {
      console.error(`No se encontró ningún usuario con el ID ${userId}`);
      // Puedes redirigir a una página de manejo de errores o realizar alguna acción adecuada
    }
  }
}
