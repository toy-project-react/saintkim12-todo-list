import React, { Component } from 'react';
import ItemWrap from './ItemWrap';

export default class ListForm extends Component {
	render = () => {
		const { data, filter } = this.props
		let wrapData = Array(...data.reduce((set, { dueDate }) => set.add(dueDate), new Set())).map(dueDate => {
			return ({ dueDate, items: data.filter(({ dueDate: d }) => d === dueDate) })
		})
		const { text, statusFilter } = filter
		const fnFilter = (item) => {
			let correct = true
			if (statusFilter && statusFilter !== 'all') {
				console.log(item.status, Number(statusFilter))
				correct = correct && item.status === Number(statusFilter)
			}
			return correct
		}
		// dueDate가 지정되었거나 올바른 데이터
		const dueDatedData = wrapData.filter(({ dueDate }) => Date.parse(dueDate))
		// dueDate가 미지정되었거나 올바르지 않은 데이터
		const notDueDatedData = wrapData.filter(({ dueDate }) => !Date.parse(dueDate))
		return (
			<div>
				<div>
					<table style={{ 'margin': '0 auto' }}>
						<thead>
							<tr>
								<th>번호</th>
								<th>내용</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>
							{ dueDatedData.map(({ dueDate, items }, i) => <ItemWrap key={ dueDate } title={ dueDate } list={ items.filter((item) => fnFilter(item)) }/>) }
							{ notDueDatedData.map(({ dueDate, items }, i) => <ItemWrap key={ dueDate } title={ '기한없음' } list={ items.filter((item) => fnFilter(item)) }/>) }
						</tbody>
					</table>
				</div>
				<div>
					<button>삭제</button>
				</div>
			</div>
		)
	}
}