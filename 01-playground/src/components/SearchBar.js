import React from 'react'

class SearchBar extends React.Component {
	handleValue = ({ target }) => {
		const { name, type, value, checked } = target
		this.props.update(name, type === 'checkbox' ? checked : value)
	}
	render = () => {
		const { searchText, stockedOnly } = this.props
		return (
			<div>
				<input type="text" name="searchText" placeholder="Search..." value={ searchText } onChange={ this.handleValue }/>
				<div>
					<input type="checkbox" name="stockedOnly" value={ stockedOnly } onChange={ this.handleValue }/>
					<label>Only show products in stock</label>
				</div>
			</div>
		)
	}
}

export default SearchBar
