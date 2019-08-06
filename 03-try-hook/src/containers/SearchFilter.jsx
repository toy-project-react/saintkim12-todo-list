import { useContext } from 'react'
import Context from 'contexts/TodolistDataContext'

const useSearchFilter = () => {
	const { search, dispatchSearch } = useContext(Context)
	const updateParam = ({ target }) => {
		const { name, value } = target
		if (name === 'text') {
			dispatchSearch({ type: 'UPDATE_TEXT', data: value })
		} else if(name === 'statusFilter') {
			dispatchSearch({ type: 'UPDATE_FILTER', data: value })
		}
	}
	return { search, updateParam }
}
export default useSearchFilter
