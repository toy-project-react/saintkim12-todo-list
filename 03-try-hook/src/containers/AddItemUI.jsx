import React, { useState, useContext } from 'react'
import { format } from 'date-fns'
import Context from 'contexts/TodolistDataContext'
import AddItemForm from 'components/AddItemForm'
const INIT_STATE = {
	title: '',
	content: '',
	dueDate: format(new Date(), 'YYYY-MM-DD')
}

const AddItemUI = () => {
	const { dispatchData } = useContext(Context)
	const [item, setItem] = useState(INIT_STATE)
	const addItem = (item) => dispatchData({ type: 'ADD_ITEM', data: item })
	return (
		<AddItemForm item={ item } setItem={ setItem } addItem={ addItem }/>
	)
}

export default AddItemUI
