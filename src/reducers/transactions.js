/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {ADD_TRANSACTION, CHANGE_YEAR} from '../actions/const';

const initialState = [];

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign([], state);

  switch (action.type) {
    case ADD_TRANSACTION: {
      // Modify next state depending on the action and return it
      nextState.push(action.transaction);
      return nextState;
    }
    
    case CHANGE_YEAR: {
      nextState.forEach((transaction) => {
        var parsedDate = new Date(transaction.parsedDate)
        parsedDate.setYear(action.year);
        transaction.parsedDate = parsedDate;
        transaction.Date = parsedDate.toLocaleDateString();
      });
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
