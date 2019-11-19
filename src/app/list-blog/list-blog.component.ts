import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogs: Blog[];

  constructor(private ModalService: NgbModal) { }
  open() {
    const modalPost = this.ModalService.open(ModalComponent);
    modalPost.componentInstance.title = 'Consulta de post ';
  }
  ngOnInit() {
    this.blogs = [
      { id: 1, url: 'http://Blog1', post: [] },
      { id: 2, url: 'http://Blog2', post: [] }
    ];

  }

}
