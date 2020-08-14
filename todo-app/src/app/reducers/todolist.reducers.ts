import { Action } from '@ngrx/store';
import { TodoList } from './../models/todolist.model';
import * as TodoListActions from './../actions/todolist.actions';

let initialState: TodoList =  {
  todo: 'test',
  status : false
};

if (window.localStorage.getItem('currentState')) {
  initialState = { ...JSON.parse(localStorage.getItem('currentState')) };
}

export function reducer(state: TodoList[] = [initialState], action: TodoListActions.Actions) {


    switch (action.type) {
      case TodoListActions.ADD_TODO:
        return [...state, action.payload];
        break;
      case TodoListActions.REMOVE_TODO:
        return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        break;
      case TodoListActions.UPDATE_TODO:
        return [...state, action.payload];
        //return state;
        break;
      case TodoListActions.SAVE_TODOS:
        localStorage.setItem('currentState', JSON.stringify(state));
        return state;
        break;
      default:
        return state;
    }
}