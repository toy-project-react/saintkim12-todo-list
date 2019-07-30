import React, { Component } from 'react';

const STATUS_MAP = {
	0: '미완료',
	1: '완료'
}
export { STATUS_MAP }
export default class ItemRow extends Component {
	render = () => {
		const { data } = this.props
		const { key, title, content, status } = data
		return (
			<tr>
				<td>{ key }</td>
				<td>
					<div>
						<h3 style={ { textAlign: 'left', margin: '1px' } }>{ title }</h3>
						<p style={ { textAlign: 'left', margin: '1px' } }>{ content }</p>
					</div>
				</td>
				<td>{ STATUS_MAP[status] }</td>
			</tr>
		)
	}
}
