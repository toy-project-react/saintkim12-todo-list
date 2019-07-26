import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// const data = [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ].map((d, key) => Object.assign(d, { key }))
class ProductTable extends React.Component {
	render = () => {
		const data = this.props.data || []
		const { searchText, stockedOnly } = this.props
		const categoryList = Array(...new Set(data.map(({ category }) => category)))
		const categoryTemplate = categoryList.map(category => {
			let list = data.filter(({ category: _c }) => category === _c)
			if (searchText) {
				list = list.filter(({ name }) => new RegExp(searchText, 'i').test(name))
			}
			if (stockedOnly) {
				list = list.filter(({ stocked }) => stocked)
			}
			return (
				// Fragment: https://ko.reactjs.org/docs/fragments.html#short-syntax
				<React.Fragment key={ category }>
					<ProductCategoryRow categoryName={category}/>
					{ list.map(product => <ProductRow key={ product.key } product={ product }/>) }
				</React.Fragment>
			)
		})
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{ categoryTemplate }
				</tbody>
			</table>
		)
	}
}

export default ProductTable
