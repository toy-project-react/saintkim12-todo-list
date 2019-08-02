import React, { Component } from 'react';
import { format } from 'date-fns'
// import { STATUS_MAP } from './ItemRow'
const INIT_STATE = {
	title: '',
	content: '',
	dueDate: format(new Date(), 'YYYY-MM-DD')
}
export default class AddItemForm extends Component {
	constructor(props) {
		super(props)
		this.state = Object.assign({}, INIT_STATE)
	}
	onItemChange = ({ target }) => {
		const { name } = target
		let value = ''
		if (['title', 'content', 'dueDate'].indexOf(name) !== -1) {
			value = target.value
			this.setState({ [name]: value })
		}
	}
	onAddClicked = () => {
		// 등록 버튼 클릭 시
		const { state } = this
		this.props.onAdded(state)
	}
	onClearClicked = () => {
		// 취소 버튼 클릭 시
		const state = Object.assign({}, INIT_STATE)
		this.setState(state)
	}
	render = () => {
		const { title, content, dueDate } = this.state
		return (
			<div>
				<div>
					<div>
						<label>
							<span>제목</span>
							<input value={ title } onChange={ this.onItemChange } type="text" name="title" placeholder="제목"/>
						</label>
					</div>
					<div>
						<label>
							<span>내용</span>
							<textarea value={ content } onChange={ this.onItemChange } name="content" placeholder="내용"/>
						</label>
					</div>
					<div>
						<label>
							<span>기한</span>
							<input value={ dueDate } onChange={ this.onItemChange } type="date" name="dueDate" min="2000-01-01" max="2999-12-31" placeholder="기한"/>
						</label>
					</div>
					<div>
						<button onClick={ this.onAddClicked }>등록</button>
						<button onClick={ this.onClearClicked }>취소</button>
					</div>
					{/* <input name="text" placeholder="검색" value={ text } onChange={ this.onParamChanged }/> */}
				</div>
			</div>
		)
	}
}