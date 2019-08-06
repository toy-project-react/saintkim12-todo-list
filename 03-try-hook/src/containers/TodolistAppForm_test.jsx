import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

const apiData = [
	{ title: 'react 공부', content: 'react Todolist 짜기', status: 1, dueDate: '2019-08-03', procDate: '2019-07-30' },
	{ title: 'vue 공부', content: 'vue api 확인하기', status: 0, dueDate: '2019-08-03' },
	{ title: 'Angular 공부', content: 'Angular 설치하기', status: 0, dueDate: '' }
].map((o, i) => {
	const dueDate = Date.parse(o.dueDate) ? o.dueDate : ''/* NaN */
	const key = i + 1
	return Object.assign(o, { key, dueDate })
})

const TodolistApp = () => {
	// state init과 setState를 대신할 함수
	// [변수명, set함수] = useState(초기값-생략가능)
	const [now, setNow] = useState(Date.now())
	setTimeout(() => setNow(Date.now()) , 1000)

	// lifecycle 함수를 대체할 함수
	// componentDidMount + componentDidUpdate
	// 함수 return 시 componentWillUnmount
	// useEffect(() => { document.title = `현재는 ${now}` }, [now] /* 이 인자가 변할 때만 화면 업데이트 */)
	useEffect(() => {
		if (new Date(now).getDay() === 1) {
			document.title = `월요일 좋아!`
		}
	})
	
	return (
		<div>
			현재 시간은 <span>{ format(new Date(now), 'YYYY-MM-DD HH:mm:ss') }</span> 입니다.
		</div>
	)
}

export default TodolistApp
