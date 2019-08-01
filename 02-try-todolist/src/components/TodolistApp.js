import React, { Component } from 'react'
import SummaryForm from './SummaryForm'
import AddItemForm from './AddItemForm'
import SearchForm from './SearchForm'
import ListForm from './ListForm'

const apiData = [
	{ title: 'react 공부', content: 'react Todolist 짜기', status: 1, dueDate: '2019-08-03', procDate: '2019-07-30' },
	{ title: 'vue 공부', content: 'vue api 확인하기', status: 0, dueDate: '2019-08-03' },
	{ title: 'Angular 공부', content: 'Angular 설치하기', status: 0, dueDate: '' }
].map((o, i) => {
	const dueDate = Date.parse(o.dueDate) ? o.dueDate : ''/* NaN */
	const key = i + 1
	return Object.assign(o, { key, dueDate })
})
export default class TodolistApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: apiData,
			search: {
				text: '',
				statusFilter: ''
			}
		}
	}
	onItemAdded = (item) => {
		const { data } = this.state
		const key = data.length + 1
		const status = 0
		const procDate = ''
		const newItem = Object.assign({ key, status, procDate }, item)
		this.setState({ data: data.concat(newItem) })
	}
	onStatusChanged = ({ key, status }) => {
		// 부모로 전달
		console.log(key, status)
	}
	searchTextChanged = (text) => {
		// https://stackoverflow.com/a/43639228
		// state 내의 object에, 지정한 값만 덮어쓰기
		this.setState(({ search: oldSearch }) => ({ search: { ...oldSearch, text }}))
	}
	statusFilterChanged = (statusFilter) => {
		this.setState(({ search: oldSearch }) => ({ search: { ...oldSearch, statusFilter: statusFilter }}))
	}
	render = () => {
		const { data, search } = this.state
		return (
			<div>
				{/* { JSON.stringify(search) } */}
				<SummaryForm data={ data }/>
				<hr/>
				<AddItemForm onAdded={ this.onItemAdded }/>
				<hr/>
				<SearchForm param={ search } onTextChanged={this.searchTextChanged} onRadioChanged={this.statusFilterChanged}/>
				<ListForm data={ data } filter={ search } onStatusChanged={ this.onStatusChanged }/>
			</div>
		)
	}
}