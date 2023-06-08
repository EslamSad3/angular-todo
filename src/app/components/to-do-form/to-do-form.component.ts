import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent {
  // @Output() addItem = new EventEmitter();
  // newItem: string = '';
  // addNewItem(newItem: string): void {
  //   this.addItem.emit(newItem);
  // }
  inputValue: string = '';
  @Output() addItem = new EventEmitter<string>();
  newItem: string = '';

  newItemFun() {
    if (this.newItem.trim()) {
      this.addItem.emit(this.newItem);
      this.newItem = '';
    }
  }
}
