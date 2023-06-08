import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  // @Input() toDoItems: string[] = [];
  // @Output() removeItem = new EventEmitter<number>();
  // onRemoveItem(index: number) {
  //   this.removeItem.emit(index);
  // }

  @Input() toDoItems: any[] = [];
  @Output() removeItem = new EventEmitter<number>();
  @Output() markCompleted = new EventEmitter<number>();
  @Output() updateCompleted = new EventEmitter<number>();

  onRemoveItem(index: number) {
    this.removeItem.emit(index);
  }

  onMarkCompleted(index: number) {
    this.markCompleted.emit(index);
  }
}
