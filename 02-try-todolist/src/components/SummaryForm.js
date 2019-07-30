import React, { Component } from 'react';
import moment from 'moment'

// const format = (...arg) => moment().format.call(window, arg)
export default class SummaryForm extends Component {
	render = () => {
		const { data } = this.props
		const now = moment().format('YYYY-MM-DD')
		const procList = data.filter(({ status, procDate }) => status === 1)
		const nowProcList = data.filter(({ status, procDate }) => status === 1 && procDate === now)
		return (
			<div>
				<div>
					오늘은 { nowProcList.length }건을 처리했습니다.
				</div>
				<div>
					전체 { data.length }건 중 { procList.length }건을 처리했습니다.
				</div>
			</div>
		)
	}
}