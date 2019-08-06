const initialState = []

// const reducer = (state, action) => {
const reducer = (state = [], { type, data = undefined, data: { key } }) => {
	if (type === 'INIT_ITEM') {
		return data
	} else if (type === 'ADD_ITEM') {
		return state.concat(Object.assign(data, { procData: '', status: 0 }))
	} else if (type === 'UPDATE_STATUS') {
		const status = data.status
		return state.map((data) => data.key === key ? Object.assign({}, data, { status }) : data)
	} else {
		return state
	}
}
export { initialState }
export default reducer
