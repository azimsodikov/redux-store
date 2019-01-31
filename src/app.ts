import * as fromStore from "./store";

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
// reference to the button
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
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

    store.dispatch({
      type: 'ADD_TODO',
      payload: payload
    });

    console.log(store.value);

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
