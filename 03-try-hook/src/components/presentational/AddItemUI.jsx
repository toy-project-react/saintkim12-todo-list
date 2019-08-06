import React, { useState } from 'react'
import { format } from 'date-fns'
import AddItemForm from 'components/container/AddItemForm'
const INIT_STATE = {
	title: '',
	content: '',
	dueDate: format(new Date(), 'YYYY-MM-DD')
}

const AddItemUI = () => {
	// const { dispatchData } = useContext(Context)
	const [item, setItem] = useState(INIT_STATE)
	const { title, content, dueDate } = item
	const addItem = (item) => console.log('item', item) || dispatchData({ type: 'ADD_ITEM', data: item })
	// console.log(item)
	const updateItem = ({ target }) => setItem({ ...item, [target.name] : target.value })
	const addNewItem = () => addItem(item)
	return (
		<AddItemForm {...{ item, setItem }}>
			<div>
				<div>
					<div>
						<label>
							<span>제목</span>
							<input type="text" name="title" placeholder="제목" value={ title } onChange={ updateItem }/>
						</label>
					</div>
					<div>
						<label>
							<span>내용</span>
							<textarea name="content" placeholder="내용" value={ content } onChange={ updateItem }/>
						</label>
					</div>
					<div>
						<label>
							<span>기한</span>
							<input type="date" name="dueDate" min="2000-01-01" max="2999-12-31" placeholder="기한" value={ dueDate } onChange={ updateItem }/>
						</label>
					</div>
					<div>
						{/* <button onClick={ addNewItem }>등록</button> */}
						<button>취소</button>
					</div>
					{/* <input name="text" placeholder="검색" value={ text } onChange={ this.onParamChanged }/> */}
				</div>
			</div>
		</AddItemForm>
	)
}

export default AddItemUI
