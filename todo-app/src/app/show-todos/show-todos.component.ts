import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoList } from '../models/todolist.model';
import { AppState } from '../app.state';
import * as TodoListActions from '../actions/todolist.actions';

@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.less']
})
export class ShowTodosComponent implements OnInit, OnDestroy {
  todoLists: Observable<TodoList[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.todoLists = store.select('todoList');
  }

  removeTodo(index) {
    this.store.dispatch(new TodoListActions.RemoveTodo(index));
    this.saveToStorage();
  }

  updateTodo(todo, status) {
    console.log(todo, status);
    this.store.dispatch(new TodoListActions.UpdateTodo({ todo: todo, status: status }));
    this.saveToStorage();
  }

  gotoAdd() {
    this.router.navigate(['enter-todo'], { relativeTo: this.route });
  }

  saveToStorage() {
    this.store.dispatch(new TodoListActions.SaveTodos());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.saveToStorage();
  }

}
