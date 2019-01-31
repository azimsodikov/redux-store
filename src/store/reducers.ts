/**
 * Objcet is gonna hold initial state of the appliation
 */
export const initialState = {
  loaded: false,
  loading: false,
  data: [[{label: 'Eat pizza', complete: false}]]
};

/**
 * Reducer function which changes the state according to action type
 * @param state new state of the application
 * @param action action type
 */
export function reducer(state = initialState, action: {type: string; payload: any}) {
  switch (action.type) {
    case 'ADD_TODO': {
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
  }
  // The reason we returning the state here is, when application loads, initial state of the application is being passed from here.
  return state;
}
