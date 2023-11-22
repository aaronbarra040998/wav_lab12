// users-list.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' },
    // ... más usuarios
  ];

  constructor(private router: Router) {}

  verDetalles(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
