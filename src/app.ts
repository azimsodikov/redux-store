import * as fromStore from "./store";

import { renderTodos } from './utils';
// ref to the input element
const input = document.querySelector('input') as HTMLInputElement;
// ref to the button
const button = document.querySelector('button') as HTMLButtonElement;
// ref to the unsub button that will unsubscribe the from store
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
// ref to the todo list items in the dom
const todoList = document.querySelector('.todos') as HTMLLIElement;


const reducers = {
  todos: fromStore.reducer
}

/**
 * We created Store object and created new instance with initial state value
 * Reducer is gonna provide the intitial state
 */
const store = new fromStore.Store(reducers)

/**
 * Button gets the value from the input and creates payload
 */
button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(payload));
    input.value = '';
  },
  false
);
/**
 * On each state change we are gonna call render method and pass on the latest todos data to render in view
 */
const unsubscribe = store.subscribe(state => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubscribe, false);

/**
 * Listening to events of the list items and if click event happens on one of them, it is gonna get the
 * attribute data and dispatch the event to the store
 */
todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    // Get value of the attribute
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    // Dispatch this data to Store
    store.dispatch(new fromStore.RemoveTodo(todo))
  }
});
