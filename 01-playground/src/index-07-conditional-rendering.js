import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
const { Component } = React
// https://ko.reactjs.org/docs/conditional-rendering.html
class UserGreeting extends Component {
	render = () => (<h1>Welcome Back!</h1>)
}
class GuestGreeting extends Component {
	render = () => (<h1>Please Sign Up.</h1>)
}
class LoginButton extends Component {
	render = () => (<button onClick={this.props.onClick}>Login</button>)
}
class LogoutButton extends Component {
	render = () => (<button onClick={this.props.onClick}>Logout</button>)
}
class Greeting extends Component {
	render = () => {
			return (
				this.props.hideMessage
				? null
				:	( 
					<div>
						{this.props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
					</div>
				)
			)
		}
}
class LoginControl extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false
		}
		// this.handleLogin = this.handleLogin.bind(this)
		// console.log(this.handleLogin)
	}
	handleLogin = () => {
		console.log('handleLogin')
		this.setState({
			isLoggedIn: true
		})
	}
	handleLogout = () => {
		console.log('handleLogout')
		this.setState({
			isLoggedIn: false
		})
	}
	render = () => {
		const { isLoggedIn } = this.state
		return (
			<div>
				<Greeting hideMessage={this.props.hideMessage} isLoggedIn={isLoggedIn}/>
				{!isLoggedIn ? <LoginButton onClick={this.handleLogin}/> : <LogoutButton onClick={this.handleLogout}/>}
			</div>
		)
	}
}
const element = <LoginControl hideMessage={false}/>

render(
	element,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn bmore about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
