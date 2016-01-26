import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(callback) {
  flux.register(callback);
}

export function dispatch(object) {
  flux.dispatch(object);
}
