import { TodoList } from './models/todolist.model';

export interface AppState {
  readonly todoList: TodoList[];
}