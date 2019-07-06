import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// https://ko.reactjs.org/docs/introducing-jsx.html
// const name = 'Josh Perez'
// const element = <h1>Hello, {name}</h1>
const formatName = (user) => `${user.firstName} ${user.lastName}`
const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}
const src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
const img = <img src={src} alt="img"/>
// const title = response.potentiallyMaliciousInput;
const element = (
	<div>
		<h1 tabIndex="0">
			Hello, {formatName(user)}!
		</h1>
		<span>{img}</span>
	</div>
)
// React.createElement 사용 => jsx를 안쓴다면?
// const createdElement = React.createElement(
// 	'h1',
// 	{ className: 'greeting' },
// 	'Hello, world!'
// )
// ==> 이렇게 생성하고 관리...하는듯
// const createdElement = {
// 	type: 'h1',
// 	props: {
// 		clssName: 'greeting',
// 		children: 'Hello, world!'
// 	}
// }
ReactDOM.render(
	element,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
