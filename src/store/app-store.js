export default function createStore(reducer) {
  let curState = [];
  const listeners = [];
  const getState = () => {
    return curState === null ? [] : curState;
  };
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  const unsubscribe = (listener) => {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
  const dispatch = (action) => {
    const preState = curState;
    curState = reducer(curState, action);
    if (curState !== preState) {
      listeners.forEach((listener) => {
        listener();
      });
    }
  };
  return {
    dispatch,
    subscribe,
    unsubscribe,
    getState
  };
}
