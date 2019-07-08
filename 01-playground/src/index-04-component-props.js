import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// https://ko.reactjs.org/docs/components-and-props.html
// eslint-disable-next-line
const Welcome1 = (props) => <h1>Hello, { props.name }</h1>
// 둘은 내부적으로 동일하다고 한다
// eslint-disable-next-line
class Welcome extends React.Component {
	render() {
		return <h1>Hello, { this.props.name }</h1>
	}
}

// props.name 전달방법
// 컴포넌트를 jsx 태그로 사용할 때는 첫글자를 대문자로 처리해야 한다고 한다
// const element = <Welcome name="Sara"/>
// ReactDOM.render(element, document.getElementById('root'))

// 여러 번 렌더링
const Welcome2 = ({ name }) => <h1>Hello, { name }</h1>
const App = () => (
	<div>
		<Welcome2 name="Sara"/>
		<Welcome2 name="Cahal"/>
		<Welcome2 name="Edite"/>
	</div>
)
ReactDOM.render(
	<App/>,
	document.getElementById('root')
)

// 컴포넌트 분리
// 원본
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
const Avatar = ({ user }) => (
	<img className="Avatar"
		src={ user.avatarUrl }
		alt={ user.name }
	/>
)
const UserInfo = ({ user }) => (
	<div className="UserInfo">
		<Avatar user={ user }/>
		<div className="UserInfo-name">{ user.name }</div>
	</div>
)
const Comment = ({ user, text, date }) => (
	<div className="Comment">
		<UserInfo user={ user }/>
		<div className="Comment-text">
			{ text }
		</div>
		<div className="Comment-date">
			{/* { formatDate(date) } */}
			{ date.toISOString() }
		</div>
	</div>
)
ReactDOM.render(
	<Comment
		user={ { name: 'Sara', avatarUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' } }
		text="hello"
		date={ new Date() }
	/>,
	document.getElementById('root')
)

// props는 읽기 전용이므로, 내부/전달받은 값을 바꾸어서는 안됨
// 따라서, 순수 함수를 사용해야 함
// eslint-disable-next-line
const sum = (a, b) => a + b				// O: a/b가 변하지 않음
// eslint-disable-next-line
const add = (a, b) => { a += b }	// X: a가 변함


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
