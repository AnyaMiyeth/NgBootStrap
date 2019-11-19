import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: Post[];

  constructor() { }

  ngOnInit() {
    this.posts = [
            {
              id: 1,
              titulo: 'Introduccion',
              contenido: 'Esta es la introducion al Curso',
              blogId: 1
            },
            {
              id: 2,
              titulo: 'Instalacion',
              contenido: 'Esta es la Instalacion del componente...',
              blogId: 1
            }
          ];
  }

}
