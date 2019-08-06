import React from 'react'
import TodolistAppForm from 'components/container/TodolistAppForm'
import SummaryUI from 'components/presentational/SummaryUI'
import AddItemUI from 'components/presentational/AddItemUI'
import SearchUI from 'components/presentational/SearchUI'

const TodolistApp = () => {
	return (
		<TodolistAppForm>
			<SummaryUI/>
			<AddItemUI/>
			<SearchUI/>
			ListUI
		</TodolistAppForm>
	)
}

export default TodolistApp
