import * as Constants from '../constants';
import { dispatch } from '../dispatcher/todo-dispatcher';

export default {
  addItem(item) {
    // console.log(item + ' hello');
    dispatch({ actionType: Constants.ADD_ITEM, item });
  }
};
