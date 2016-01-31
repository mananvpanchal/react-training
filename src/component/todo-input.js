import React from 'react';
import * as Constants from '../constants';
import { connect } from 'react-redux';

const mapDisaptchToProps = (dispatch) => {
  return {
    onClickAddItem: (item) => { dispatch({ type: Constants.ADD_ITEM, item }); }
  };
};

let TodoInput = ({ onClickAddItem }) => {
  let inp;
  return (<div><input type="text" ref={(node) => { inp = node; }}/><button onClick={() => { onClickAddItem.bind(null, inp.value)(); }}>Add</button></div>);
};

TodoInput = connect(null, mapDisaptchToProps)(TodoInput);

export default TodoInput;
