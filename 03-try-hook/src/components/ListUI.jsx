import React from 'react';
import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'
import useTodolistData from 'containers/TodolistData'
import { STATUS_MAP } from 'constants/Constant'

// 세부 아이템 UI
const ItemUI = ({ data: { key = -1, title = '', content = '', status = -1 } }) => {
	const { updateStatus } = useTodolistData()
	const onStatusChangeClicked = (status) => updateStatus({ key, status })
	const statusChangeBtn =
		status === 0
		? <button onClick={() => onStatusChangeClicked(1)}>했어요</button>
		: <button onClick={() => onStatusChangeClicked(0)}>못했어요</button>
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
// 아이템 Wrap UI
const ItemWrapUI = ({ title, list }) => {
	return (
		<>
			<tr>
				<th colSpan="4">{ title }</th>
			</tr>
			{ list.map(data => <ItemUI key={ data.key} data={{ ...data }}/>) }
		</>
	)
}

const ListUI = () => {
	const { dueDatedData, notDueDatedData, fnFilter } = useTodolistData()
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
						{
							dueDatedData.map(({ dueDate, items }, i) => {
								const props = {
									title: format(new Date(Date.parse(dueDate)), 'YYYY-MM-DD (dd)', { locale }),
									list: items.filter((item) => fnFilter(item))
								}
								return <ItemWrapUI key={ dueDate } {...props} />
								// return <ItemWrapUI
								// 	key={ dueDate }
								// 	title={ format(new Date(Date.parse(dueDate)), 'YYYY-MM-DD (dd)', { locale }) }
								// 	list={ items.filter((item) => fnFilter(item)) }
								// />
							})
						}
						{/* { notDueDatedData.map(({ dueDate, items }, i) => <ItemWrapUI key={ dueDate } title={ '기한없음' } list={ items.filter((item) => fnFilter(item)) } onStatusChanged={ this.onStatusChanged }/>) } */}
						{
							notDueDatedData.map(({ dueDate, items }, i) => {
								const props = {
									title: '기한없음',
									list: items.filter((item) => fnFilter(item))
								}
								return <ItemWrapUI key={ dueDate } {...props} />
								// return <ItemWrapUI
								// 	key={ dueDate }
								// 	title={ format(new Date(Date.parse(dueDate)), 'YYYY-MM-DD (dd)', { locale }) }
								// 	list={ items.filter((item) => fnFilter(item)) }
								// />
							})
						}
					</tbody>
				</table>
			</div>
			{/* <div>
				<button>삭제</button>
			</div> */}
		</div>
	)
}

export default ListUI
