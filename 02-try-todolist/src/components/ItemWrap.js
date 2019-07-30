import React, { Component } from 'react';
import ItemRow from './ItemRow';

export default class ItemWrap extends Component {
	render = () => {
		const { title, list } = this.props
		return (
			<>
				<tr>
					<th colSpan="3">{ title }</th>
				</tr>
				{ list.map(data => <ItemRow key={ data.key } data={ data }/>) }
			</>
		)
	}
}
