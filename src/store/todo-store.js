import EventEmitter from 'events';
import { register } from '../dispatcher/todo-dispatcher';
import * as Constants from '../constants';

const STORE_CHANGE = 'store-change';

const todoList = [];

const TodoStore = Object.assign(EventEmitter.prototype, {

  getTodoList() {
    return todoList;
  },

  emitChange() {
    this.emit(STORE_CHANGE);
  },

  addChangeListener(callback) {
    this.on(STORE_CHANGE, callback);
  },

  removeChangeListener(callback) {
    this.removeChangeListener(callback);
  },

  _addItem(item) {
    todoList.push(item);
    TodoStore.emitChange();
  }

});

register((actionObject) => {
  if (actionObject.actionType === Constants.ADD_ITEM) {
    TodoStore._addItem(actionObject.item);
  }
});

export default TodoStore;
