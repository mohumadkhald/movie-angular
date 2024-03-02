import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginations',
  standalone: true,
  imports:[NgFor],
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  onPageChange(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.pageChange.emit(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}