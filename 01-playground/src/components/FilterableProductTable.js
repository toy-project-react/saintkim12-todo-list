import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import json from './data.json'

// const data = [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ].map((d, key) => Object.assign(d, { key }))
const data = json.map((d, key) => Object.assign(d, { key }))
class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data,
			searchText: '',	// undefined 시 비제어 컴포넌트 취급?해서 경고 뜸(https://ko.reactjs.org/docs/forms.html#controlled-input-null-value)
			stockedOnly: false
		}
	}
	updateValue = (name, value) => {
		this.setState({ [name]: value })
	}
	render = () => {
		const { searchText, stockedOnly } = this.state
		return (
			<div>
				<SearchBar searchText={ searchText } stockedOnly={ stockedOnly } update={this.updateValue}/>
				<ProductTable data={ data } searchText={ searchText } stockedOnly={ stockedOnly }/>
			</div>
		)
	}
}

export default FilterableProductTable
