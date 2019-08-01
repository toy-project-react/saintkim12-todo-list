import React, { Component } from 'react';
import ItemRow from './ItemRow';

export default class ItemWrap extends Component {
	onStatusChanged = (...args) => {
		// 부모로 전달
		this.props.onStatusChanged.apply(this, args)
	}
	render = () => {
		const { title, list } = this.props
		return (
			<>
				<tr>
					<th colSpan="4">{ title }</th>
				</tr>
				{ list.map(data => <ItemRow key={ data.key } data={ data } onStatusChanged={ this.onStatusChanged }/>) }
			</>
		)
	}
}
