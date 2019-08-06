import { useContext } from 'react'
import Context from 'contexts/TodolistDataContext'

const useTodolistData = () => {
	const { data, dispatchData, search } = useContext(Context)
	const updateStatus = ({ key, status }) => {
		dispatchData({ type: 'UPDATE_STATUS', data: { key, status } })
	}
	
	let wrapData = Array(...data.reduce((set, { dueDate }) => set.add(dueDate), new Set())).map(dueDate => {
		return ({ dueDate, items: data.filter(({ dueDate: d }) => d === dueDate) })
	})
	const { text, statusFilter } = search
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
	return { data, updateStatus, dueDatedData, notDueDatedData, fnFilter }
}
export default useTodolistData
