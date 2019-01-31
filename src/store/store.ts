export class Store {
  // Subscribers to the store
  private subscribers: Function[];
  // Reducers object
  private reducers: {[key: string]: Function};
  // Contains state of the application
  private state: {[key: string]: any};

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  // Getter for the state, so we do not accidently change the property
  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    // Once function gets called, it will immedietly unsubscribe this function
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  dispatch(action) {
    // Update entire state object by calling the reduce function and iterate over
    this.state = this.reduce(this.state, action);
    this.notify();

  }


  private notify() {
    // Every time subscribe is called we gonna let subscribers know that there is change and pass down the new state
    this.subscribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};

    for (const prop in this.reducers) {
     /**
      * We are doing newState.todos = this.reducers.todos() but with dynamic properties
      * We are passing that specific slice of the state and action to the reducers function
      */
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
