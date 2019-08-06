
const initialState = {
	text: '',
	statusFilter: '0'
}

const reducer = (state, { type = '', data = '' } = { type: '', data: '' }) => {
	if (type === 'UPDATE_TEXT') {
		return Object.assign({}, state, { text: data })
	} else if (type === 'UPDATE_FILTER') {
		return Object.assign({}, state, { statusFilter: data })
	} else {
		return state
	}
}

export { initialState }
export default reducer
