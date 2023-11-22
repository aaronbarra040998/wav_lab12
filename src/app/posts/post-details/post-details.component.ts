// post-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  publicacion: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtén el ID de la publicación desde la URL
    const postId = this.route.snapshot.paramMap.get('id');

    // Asumiendo que tienes un servicio o un array 'publicaciones' disponible
    // Cambia esta lógica según tu implementación real
    const publicaciones = [
      { id: 1, titulo: 'Publicación 1', contenido: 'Contenido de la publicación 1' },
      { id: 2, titulo: 'Publicación 2', contenido: 'Contenido de la publicación 2' },
      { id: 3, titulo: 'Publicación 3', contenido: 'Contenido de la publicación 3' },
      // ... más publicaciones
    ];

    // Encuentra la publicación con el ID correspondiente
    this.publicacion = publicaciones.find(pub => pub.id === Number(postId));

    if (!this.publicacion) {
      console.error(`No se encontró ninguna publicación con el ID ${postId}`);
      // Puedes redirigir a una página de manejo de errores o realizar alguna acción adecuada
    }
  }
}
