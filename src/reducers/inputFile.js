/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {UPLOAD_FILE, CHANGE_YEAR} from '../actions/const';
var thisYear = new Date().getFullYear();
const initialState = { file: undefined, year: thisYear };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPLOAD_FILE: {
      nextState.file = action.file;
      return nextState;
    }
    
    case CHANGE_YEAR: {
      nextState.year = action.year;
      return nextState;
    }
   
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
