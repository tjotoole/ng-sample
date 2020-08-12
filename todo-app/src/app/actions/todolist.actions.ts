import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { TodoList } from './../models/todolist.model';

export const ADD_TODO = '[TODO] Add';
export const REMOVE_TODO = '[TODO] Remove';
export const UPDATE_TODO = '[TODO] Update';
export const SAVE_TODOS = '[TODO] Save';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: TodoList) {}
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;

  constructor(public payload: TodoList) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) {}
}

export class SaveTodos implements Action {
  readonly type = SAVE_TODOS;

  constructor() {}
}


export type Actions = AddTodo | RemoveTodo | UpdateTodo | SaveTodos;
