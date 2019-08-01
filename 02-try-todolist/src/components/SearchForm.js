import React, { Component } from 'react';
import { STATUS_MAP } from './ItemRow'
const convertStatusList = Object.entries(STATUS_MAP).map(([status, text]) => ({ status: status, text }))

export default class SearchForm extends Component {
	onParamChanged = ({ target }) => {
		const { name, value } = target
		if (name === 'text') {
			this.props.onTextChanged(value)
		} else if(name === 'statusFilter') {
			this.props.onRadioChanged(value)
		}
	}
	render = () => {
		const { text } = this.props.param
		let statusFilter = this.props.param.statusFilter || 'all'
		return (
			<div>
				<div>
					<input type="text" name="text" placeholder="검색" value={ text } onChange={ this.onParamChanged }/>
				</div>
				<div>
					<label><input name="statusFilter" type="radio" value="all" checked={ statusFilter === 'all' } onChange={ this.onParamChanged }/>전체</label>
					{ convertStatusList.map(({ status, text }) => (
						<label key={ status }><input name="statusFilter" type="radio" value={ status } checked={ statusFilter === status } onChange={ this.onParamChanged }/>{ text }</label>
					)) }
				</div>
			</div>
		)
	}
}