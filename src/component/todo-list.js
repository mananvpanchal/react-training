import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    items: state
  };
};

let TodoList = ({ items }) => {
  return (<div><ul>{ items.map((item, i) => {
    return (<li key={i}>{item}</li>);
  }) }</ul></div>);
};

TodoList = connect(mapStateToProps, null)(TodoList);

export default TodoList;
