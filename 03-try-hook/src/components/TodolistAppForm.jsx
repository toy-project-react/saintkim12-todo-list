import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

const apiData = [
	{ title: 'react 공부', content: 'react Todolist 짜기', status: 1, dueDate: '2019-08-03', procDate: '2019-07-30' },
	{ title: 'vue 공부', content: 'vue api 확인하기', status: 0, dueDate: '2019-08-03' },
	{ title: 'Angular 공부', content: 'Angular 설치하기', status: 0, dueDate: '' }
].map((o, i) => {
	const dueDate = Date.parse(o.dueDate) ? o.dueDate : ''/* NaN */
	const key = i + 1
	return Object.assign(o, { key, dueDate })
})

const TodolistApp = () => {
	const [data, setData] = useState([])
	const [search, setSearch] = useState({
		text: '',
		statusFilter: '0'
	})

	

	return (
		<div>
			SummaryUI
			AddItemUI
			SearchUI
			ListUI
		</div>
	)
}

export default TodolistApp
