import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTodosComponent } from './show-todos/show-todos.component';
import { EnterTodoComponent } from './enter-todo/enter-todo.component';

const routes: Routes = [
  { path: '', component: ShowTodosComponent },
  { path: 'enter-todo', component: EnterTodoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
