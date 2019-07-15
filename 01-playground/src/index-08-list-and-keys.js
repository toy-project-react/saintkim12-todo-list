import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// const { Component } = React

// https://ko.reactjs.org/docs/lists-and-keys.html
// eslint-disable-next-line
// render(
// 	<ul>
// 		{[2, 4, 6, 8, 10].map(d => <li>{d}</li>)}
// 	</ul>,
// 	document.getElementById('root')
// )
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
