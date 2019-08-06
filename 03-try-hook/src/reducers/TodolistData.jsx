const initialState = []

// const reducer = (state, action) => {
const reducer = (state = [], { type, data = []}) => {
	if (type === 'INIT_ITEM') {
		return data
	} else if (type === 'ADD_ITEM') {
		return state.concat(data)
	}
	return state
}
export { initialState }
export default reducer
