import React, { useReducer, useEffect } from 'react'
import SummaryUI from 'containers/SummaryUI'
import AddItemUI from 'containers/AddItemUI'
import TodolistDataContext from 'contexts/TodolistDataContext'
import dataReducer, { initialState as initialData } from 'reducers/TodolistData'
import searchReducer, { initialState as initialSearch } from 'reducers/SearchFilter'

// const apiData = [
// 	{ title: 'react 공부', content: 'react Todolist 짜기', status: 1, dueDate: '2019-08-03', procDate: '2019-07-30' },
// 	{ title: 'vue 공부', content: 'vue api 확인하기', status: 0, dueDate: '2019-08-03' },
// 	{ title: 'Angular 공부', content: 'Angular 설치하기', status: 0, dueDate: '' }
// ].map((o, i) => {
// 	const dueDate = Date.parse(o.dueDate) ? o.dueDate : ''/* NaN */
// 	const key = i + 1
// 	return Object.assign(o, { key, dueDate })
// })

const loadData = new Promise((resolve) => {
	setTimeout(() => {
		const d = [
			{ title: 'react 공부', content: 'react Todolist 짜기', status: 1, dueDate: '2019-08-03', procDate: '2019-07-30' },
			{ title: 'vue 공부', content: 'vue api 확인하기', status: 0, dueDate: '2019-08-03' },
			{ title: 'Angular 공부', content: 'Angular 설치하기', status: 0, dueDate: '' }
		].map((o, i) => {
			const dueDate = Date.parse(o.dueDate) ? o.dueDate : ''/* NaN */
			const key = i + 1
			return Object.assign(o, { key, dueDate })
		})
		resolve(d)
	}, 2000)
})

const TodolistAppForm = () => {
	// const [data, setData] = useState([])
	// const [search, setSearch] = useState({
	// 	text: '',
	// 	statusFilter: '0'
	// })
	const [data, dispatchData] = useReducer(dataReducer, initialData)
	const [search, dispatchSearch] = useReducer(searchReducer, initialSearch)

	useEffect(() => {
		const fetchData = async () => {
			const apiData = await loadData
			dispatchData({ type: 'INIT_ITEM', data: apiData })
		}
		fetchData()
	})
	return (
		<TodolistDataContext.Provider value={{ data, search, dispatchData, dispatchSearch }}>
			<SummaryUI/>
			<AddItemUI/>
			SearchUI
			ListUI
		</TodolistDataContext.Provider>
	)
}
export default TodolistAppForm
