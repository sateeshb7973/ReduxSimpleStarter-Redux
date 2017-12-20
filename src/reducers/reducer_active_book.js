// State argument is not application state, only the state of this reducer is responsible for

// here we assigned state= null to handle the situvation when the application is initially loaded
// when application is initially loaded state will be undefined, redux will not handleundefined.
// So to handle this we have assigned state= null

//state should never get mutated always return a fresh object
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    }
  return state;
}
