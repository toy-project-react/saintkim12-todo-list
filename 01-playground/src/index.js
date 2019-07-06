import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/components-and-props.html
const Welcome1 = (props) => <h1>Hello, { props.name }</h1>
// 둘은 내부적으로 동일하다고 한다
class Welcome extends React.Component {
	render() {
		return <h1>Hello, { this.props.name }</h1>
	}
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
