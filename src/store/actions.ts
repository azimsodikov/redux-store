/**
 * Namespace for our actions and action constants
 */
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

/**
 * Action creators
 */
export class AddTodo {
  // We are taking this constant and adding it in our custom object
  readonly type = ADD_TODO;
  constructor(private payload: any) {
  }
}
export class RemoveTodo {
  // We are taking this constant and adding it in our custom object
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {
  }
}
