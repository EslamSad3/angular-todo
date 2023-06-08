import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoAppComponent } from './components/to-do-app/to-do-app.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAppComponent,
    ToDoFormComponent,
    ToDoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
