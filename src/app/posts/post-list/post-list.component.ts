// post-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  publicaciones = [
    { id: 1, titulo: 'Publicación 1' },
    { id: 2, titulo: 'Publicación 2' },
    { id: 3, titulo: 'Publicación 3' },
    // ... más publicaciones
  ];
}
