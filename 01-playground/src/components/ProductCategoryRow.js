import React from 'react'

class ProductCategoryRow extends React.Component {
	render = () => {
		const { categoryName } = this.props
		return (
			<tr>
				<td colSpan="2">
					<strong>{ categoryName }</strong>
				</td>
			</tr>
		)
	}
}

export default ProductCategoryRow
