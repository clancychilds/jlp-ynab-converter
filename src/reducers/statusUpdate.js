/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { BUTTON_CLICK, CHANGE_STATUS } from '../actions/const';

const initialState = { status : 'No file loaded',
                       clickNumber : 0 };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case BUTTON_CLICK: {
      nextState.clickNumber++;
      if (nextState.clickNumber == 1) {
        nextState.status = 'Button Clicked Once';
      } else if (nextState.clickNumber % 2) {
        nextState.status = 'Button Clicked odd number of times'
      } else {
        nextState.status = 'Button Clicked even number of times'
      }
      
      return nextState;
    }
    case CHANGE_STATUS: {
      nextState.status = action.status;
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
