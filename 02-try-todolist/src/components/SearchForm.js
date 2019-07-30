import React, { Component } from 'react';

export default class SearchForm extends Component {
	render = () => {
		return (
			<div>
				<div>
					<input text="검색"/>
				</div>
				<div>
					<label><input type="checkbox"/>완료</label>
					<label><input type="checkbox"/>완료</label>
					<label><input type="checkbox"/>완료</label>
				</div>
			</div>
		)
	}
}