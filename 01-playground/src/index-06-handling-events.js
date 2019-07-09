import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/handling-events.html
// eslint-disable-next-line
const alertEvent = (e) => {
	// 명시적으로 이벤트 중단 선언
	// return false ㄴㄴ
	// e는 합성 이벤트
	e.preventDefault()
	window.alert('alert haha')
}
// 이벤트 속성명은 html5의 소문자 대신 camelCase 방식으로 선언
// const EventButton = () => (
// 	<a href="www.google.com" onClick={alertEvent}>Alert Button</a>
// )
// ReactDOM.render(
// 	<EventButton/>,
// 	document.getElementById('root')
// )
class Toggle extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isToggleOn: true }

		// this 작용을 위한 바인딩
		// this.handleClick = this.handleClick.bind(this)
	}

	// handleClick() {
	// 	this.setState(state => ({ isToggleOn: !state.isToggleOn }))
	// }
	// this 작용을 위한 바인딩: "실험적인" 퍼블릭 클래스 필드 문법
	handleClick = () => {
		this.setState(state => ({ isToggleOn: !state.isToggleOn }))
	}
	passParameter = (...args) => {
		alert('passed Parameter is ' + args)
		console.log(args[args.length - 1])
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>
					{ this.state.isToggleOn ? 'ON' : 'OFF' }
				</button>
				<button onClick={this.passParameter.bind(this, 'a', 'b', 3)}>Pass Parameters!</button>
			</div>
		)
	}
}
ReactDOM.render(
	<Toggle/>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
