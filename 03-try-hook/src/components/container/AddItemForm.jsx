import React, { useState, useContext } from 'react'
import Context from 'contexts/TodolistDataContext'

const AddItemForm = ({ item, setItem }) => {
	const { dispatchData } = useContext(Context)
	// const [item, setItem] = useState(INIT_STATE)
	const addItem = (item) => dispatchData({ type: 'ADD_ITEM', data: item })

	return (
		<></>
	)
}

export default AddItemForm
