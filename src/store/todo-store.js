import * as Constants from '../constants';
import { createStore } from 'redux';

const reducer = (state = [], action) => {
  if (action.type === Constants.ADD_ITEM) {
    return [...state, action.item];
  } else {
    return state;
  }
};

export const store = createStore(reducer);
