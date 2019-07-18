import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/lifting-state-up.html
const { Component } = React
// eslint-disable-next-line
class BoilingVerdict extends Component {
	render() {
		const { celsius } = this.props
		return <p>{(celsius >= 100) ? 'The water was boil.' : 'The water was not boil.' }</p>
	}
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
// eslint-disable-next-line
class TemperatureInput extends Component {
	handleChange = ({ target }) => {
		this.props.onTempratureChange(target.value)
	}
	render() {
		const { temperature, scale } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
		)
	}
}
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
// eslint-disable-next-line
class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			temperature: '',
			scale: 'c',
		}
	}
	handleCelsiusChange = (temperature) => {
		this.setState({ scale: 'c', temperature})
	}
	handleFahrenheitChange = (temperature) => {
		this.setState({ scale: 'f', temperature})
	}
	
	render() {
		const { scale, temperature } = this.state
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
		return (
			<div>
				<TemperatureInput temperature={celsius} onTempratureChange={this.handleCelsiusChange} scale="c"/>
				<TemperatureInput temperature={fahrenheit} onTempratureChange={this.handleFahrenheitChange} scale="f"/>
			</div>
		)
	}
}

render(
	<Calculator/>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
