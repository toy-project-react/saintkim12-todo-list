import React from 'react'
import useAddItem from 'containers/AddItem'

const AddItemUI = () => {
	const { item: { title, content, dueDate }, clearItem, updateItem, addNewItem } = useAddItem()

	return (
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
					<button onClick={ addNewItem }>등록</button>
					<button onClick={ clearItem }>취소</button>
				</div>
			</div>
		</div>
	)
}

export default AddItemUI
