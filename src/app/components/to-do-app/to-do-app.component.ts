import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css'],
})
export class ToDoAppComponent {
  // toDoItems: string[] = [];

  // addNewItem(newItem: any) {
  //   this.toDoItems.push(newItem);
  // }

  // onRemoveItem(index: number) {
  //   this.toDoItems.splice(index, 1);
  // }

  toDoItems: ToDoItem[] = [];
  upd: string = 'Ay7aga';

  addNewItem(newItem: string) {
    const item: ToDoItem = {
      name: newItem,
      completed: false,
    };
    this.toDoItems.push(item);
  }

  removeItem(index: number) {
    this.toDoItems.splice(index, 1);
  }

  markCompleted(index: number) {
    this.toDoItems[index].completed = !this.toDoItems[index].completed;
  }
}

interface ToDoItem {
  name: string;
  completed: boolean;
}
