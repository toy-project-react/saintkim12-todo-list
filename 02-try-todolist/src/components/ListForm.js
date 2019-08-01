import React, { Component } from 'react';
import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'
import ItemWrap from './ItemWrap';

export default class ListForm extends Component {
	onStatusChanged = (...args) => {
		// 부모로 전달
		this.props.onStatusChanged.apply(this, args)
	}
	render = () => {
		const { data, filter } = this.props
		let wrapData = Array(...data.reduce((set, { dueDate }) => set.add(dueDate), new Set())).map(dueDate => {
			return ({ dueDate, items: data.filter(({ dueDate: d }) => d === dueDate) })
		})
		const { text, statusFilter } = filter
		const fnFilter = (item) => {
			let correct = true
			if (statusFilter && statusFilter !== 'all') {
				// console.log(item.status, Number(statusFilter))
				correct = correct && item.status === Number(statusFilter)
			}
			if (text && text.trim()) {
				const regExp = new RegExp(text.trim(), 'i')
				// console.log('regExp', regExp)
				// title과 content 중 하나라도 like형태로 일치하면 true를 뱉도록
				correct = correct && [item.title, item.content].map((v) => regExp.test(v)).reduce((b, _b) => b || _b, false)
			}
			return correct
		}
		// dueDate가 지정되었거나 올바른 데이터
		const dueDatedData = wrapData.filter(({ dueDate }) => Date.parse(dueDate))
			.sort(({ dueDate: date1 }, { dueDate: date2 }) => Date.parse(date1) - Date.parse(date2))
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
								<th>처리</th>
							</tr>
						</thead>
						<tbody>
							{ dueDatedData.map(({ dueDate, items }, i) => <ItemWrap key={ dueDate } title={ format(new Date(Date.parse(dueDate)), 'YYYY-MM-DD (dd)', { locale }) } list={ items.filter((item) => fnFilter(item)) } onStatusChanged={ this.onStatusChanged }/>) }
							{ notDueDatedData.map(({ dueDate, items }, i) => <ItemWrap key={ dueDate } title={ '기한없음' } list={ items.filter((item) => fnFilter(item)) } onStatusChanged={ this.onStatusChanged }/>) }
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