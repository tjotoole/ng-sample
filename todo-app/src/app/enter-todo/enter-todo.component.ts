import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoList } from '../models/todolist.model';
import { AppState } from '../app.state';
import * as TodoListActions from '../actions/todolist.actions';

@Component({
  selector: 'app-enter-todo',
  templateUrl: './enter-todo.component.html',
  styleUrls: ['./enter-todo.component.less']
})
export class EnterTodoComponent implements OnInit, OnDestroy {
  todoLists: Observable<TodoList[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.todoLists = store.select('todoList');
  }

  addTodo(todo, status) {
    this.store.dispatch(new TodoListActions.AddTodo({ todo: todo, status: status }));
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  cancelAdd() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(new TodoListActions.SaveTodos());
  }

}
