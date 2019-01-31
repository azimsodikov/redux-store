import * as fromActions from './actions';
/**
 * Objcet is gonna hold initial state of the appliation
 */
export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}]
};

/**
 * Reducer function which changes the state according to action type
 * @param state new state of the application
 * @param action action type
 */
export function reducer(state = initialState, action: {type: string; payload: any}) {
  switch (action.type) {
    case fromActions.ADD_TODO: {
      // Do the action here
      const todo = action.payload;
      // Compose new array from todos
      const data = [...state.data, todo];
      // Return new object with merged data
      return {
        ...state,
        data: data
      }
    }
    case fromActions.REMOVE_TODO: {
      // Filter out removed to do
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      // Return new data
      return {
        ...state,
        data
      }
    }
  }
  // The reason we returning the state here is, when application loads, initial state of the application is being passed from here.
  return state;
}
