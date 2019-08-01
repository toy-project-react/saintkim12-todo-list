import React, { Component } from 'react';

const STATUS_MAP = {
	0: '미완료',
	1: '완료'
}
export { STATUS_MAP }
export default class ItemRow extends Component {
	onStatusChangeClicked = (status) => {
		const { key, status: oldStatus } = this.props.data
		console.log(oldStatus, '->', status)
		this.props.onStatusChanged({ key, status })
	}
	render = () => {
		const { data } = this.props
		const { key, title, content, status } = data
		const statusChangeBtn =
			status === 0
			? <button onClick={this.onStatusChangeClicked.bind(this, 1)}>했어요</button>
			: <button onClick={this.onStatusChangeClicked.bind(this, 0)}>못했어요</button>
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
				<td>{ statusChangeBtn }</td>
			</tr>
		)
	}
}
