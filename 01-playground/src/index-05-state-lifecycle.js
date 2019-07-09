import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/state-and-lifecycle.html
// eslint-disable-next-line
// const Clock = ({ date }) => (
// 	<div>
// 		<h1>Hello, world!</h1>
// 		<h2>It is { date.toLocaleTimeString() }</h2>
// 	</div>
// )
// const tick = () => {
// 	ReactDOM.render(
// 		<Clock date={ new Date() }/>,
// 		document.getElementById('root')
// 	)
// }
// setInterval(tick, 1000)
// Clock 생성만으로 기능이 탑재되어 사용 가능하도록(> 재사용/캡슐화)
// => state 이용
class Clock extends React.Component {
	// 생성자
	// state의 초기값 선언 가능
	constructor(props) {
		super(props)
		this.state = { date: new Date() }
	}
	// 생명주기 메서드
	// componentDidMount: 처음 DOM에 렌더링 될 때마다
	componentDidMount() {
		// 데이터 흐름에 포함되지 않는 항목은 자유롭게 선언/보관 가능
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	// componentWillUnmount: 생성된 DOM이 삭제될 때마다
	componentWillUnmount() {
		clearInterval(this.timerID)
	}
	tick = () => {
		// 생성자 밖에서 state에 값을 적용할 때는 setState 이용
		// this.date = new Date()
		this.setState({
			date: new Date()
		})
	}
	someUpdate() {
		// props와 state는 비동기적일 수 있으므로 직접 값을 사용하면 안된다고 한다
		// this.setState({ date: this.props.date1 + this.state.date2 })
		this.setState(({ /* state */date2 }, { /* props */date1 }) => ({ date: /* props. */date1 + /* state. */date2 }))

		// setState 사용 시 얕은 병합이 이루어지므로, 특정 값만 업데이트 할 수 있다
		this.setState({ posts: ['1', '2'] })		// comments 등 다른 변수에 영향 없음
		this.setState({ comments: ['3', '4']})	// posts 등 다른 변수에 영향 없음
	}
	render() {
		// 클래스 내에서 제어 가능한 state로 변경
		// const { date } = this.props
		const { date } = this.state
		return (
			<div>
		 		<h1>Hello, world!</h1>
		 		<h2>It is { date.toLocaleTimeString() }</h2>
			</div>
		)
	}
}
// ReactDOM.render(
// 	<Clock/>,
// 	document.getElementById('root')
// )
// 부모의 state를 자식 컴포넌트의 props로 전달 가능
// 하향식(단방향식) 데이터 흐름 => 아래로 흐른다
const FormattedDate = (props) => (
	<h2>It is { props.date.toLocaleTimeString() }</h2>
)
const parentElement = () => (<FormattedDate date={ this.state.date }/>)

// 각 컴포넌트(Clock)은 독립적
ReactDOM.render(
	<div>
		<Clock/>
		<Clock/>
		<Clock/>
		<Clock/>
	</div>,
	document.getElementById('root')
)
	
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
