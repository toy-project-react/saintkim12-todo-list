import React from 'react'

class ProductRow extends React.Component {
	render = () => {
		const { name, price, stocked } = this.props.product
		return (
			<tr>
				<td style={{ color: stocked || 'red', fontWeight: stocked || 'bold' }}>{ name }</td>
				<td>{ price }</td>
			</tr>
		)
	}
}

export default ProductRow
