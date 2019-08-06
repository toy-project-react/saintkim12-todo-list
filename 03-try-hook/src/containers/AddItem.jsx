import { useState, useContext } from 'react'
import Context from 'contexts/TodolistDataContext'
import { format } from 'date-fns'
const INIT_STATE = {
	title: '',
	content: '',
	dueDate: format(new Date(), 'YYYY-MM-DD')
}

const useAddItem = () => {
	const { data, dispatchData } = useContext(Context)
	const [item, setItem] = useState(INIT_STATE)
	// const { title, content, dueDate } = item
	// console.log(item)
	const getKey = () => data.length + 1
	const clearItem = () => setItem(INIT_STATE)
	const updateItem = ({ target }) => setItem({ ...item, [target.name] : target.value })
	const addNewItem = () => {
		dispatchData({ type: 'ADD_ITEM', data: { key: getKey(), ...item } })
		clearItem()
	}
	return { item, clearItem, updateItem, addNewItem }
}
export default useAddItem
