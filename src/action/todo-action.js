import * as Constants from '../constants';
import { store } from '../store/todo-store';

export default {
  addItem(item) {
    store.dispatch({ type: Constants.ADD_ITEM, item });
  }
};
