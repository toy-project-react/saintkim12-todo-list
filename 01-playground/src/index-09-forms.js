import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/forms.html
// eslint-disable-next-line
class NameForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
	}
	handleChange = ({ target }) => {
		const { value } = target
		this.setState({ value })
	}
	handleSubmit = (e) => {
		alert(`A name was submitted: ${this.state.value}`)
		e.preventDefault()
	}
	render = () => (
		<form onSubmit={this.handleSubmit}>
			<label>Name: <input type="text" value={this.state.value} onChange={this.handleChange}/></label>
			<input type="submit" value="Submit"/>
		</form>
	)
}
// eslint-disable-next-line
class EssayForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: 'Please write an essay about your favorite DOM element.' }
	}
	handleChange = ({ target }) => {
		const { value } = target
		this.setState({ value })
	}
	handleSubmit = (e) => {
		alert(`An essay was submitted: ${this.state.value}`)
		e.preventDefault()
	}
	render = () => (
		<form onSubmit={this.handleSubmit}>
			<label>Essay: <textarea value={this.state.value} onChange={this.handleChange}/></label>
			<input type="submit" value="Submit"/>
		</form>
	)
}
// eslint-disable-next-line
class FlavorForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: 'coconut' }
	}
	handleChange = ({ target }) => {
		const { value } = target
		this.setState({ value })
	}
	handleSubmit = (e) => {
		alert(`AYour favorite flavor is: ${this.state.value}`)
		e.preventDefault()
	}
	render() {
		const options = (['grapefruit', 'lime', 'coconut', 'mango'].map(value => <option value={value}>{value.replace(/^([\w]{1})/, (g) => g.toUpperCase())}</option>))
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite flavor: 
					<select value={this.state.value} onChange={this.handleChange}>
						{options}
					</select>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}
// eslint-disable-next-line
class Reservation extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isGoing: true, numberOfGuests: 2 }
	}
	handleInputChange = ({ target }) => {
		const value = target[target.type === 'checkbox' ? 'checked' : 'value']
		const { name } = target
		this.setState({
			[name]: value
		})
	}
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
ReactDOM.render(
	<Reservation/>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
