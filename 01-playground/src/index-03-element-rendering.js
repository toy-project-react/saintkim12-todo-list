import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// https://ko.reactjs.org/docs/rendering-elements.html
// const element = <h1>Hello, world</h1>
const tick = () => {
	const now = new Date().toLocaleTimeString()
	const element = (
		<div>
			<h1>Hello, world</h1>
			<h2>It is {now}</h2>{/* 변하는 부분(>텍스트)만 리렌더링된다 */}
		</div>
	)
	ReactDOM.render(
		element,
		document.getElementById('root')
	)
}

setInterval(tick, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
