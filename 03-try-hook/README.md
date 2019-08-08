# [Try-hook](https://ko.reactjs.org/docs/hooks-intro.html)
함수형 컴포넌트에서 상태값 사용 및 이벤트 정의를 위해 나온 개념

## use~~ 형태의 명칭을 사용
관롄가?

## useState()
상태값 및 그 값을 갱신하는 함수 반환
(Class Component의 this.state, this.setState()를 대신함)
### 사용
```jsx
	const [상태값명, 상태값변경함수명] = useState(초기값)
```
```jsx
import React, { useState } from 'react'
// in some component
// ..
		const initialState = 0
		const [state, setState] = useState(initialState) /* [초기화된 상태값(최초값은 initialState와 같을거임), 상태값을 변경하는 함수] 형태의 배열 리턴 */
		// 초기값 지점 시 함수 사용 가능(이 경우 리턴값이 초기값)
		// 만약 상태값을 변경하는 함수가 필요없다면
		// 	const [state] = useState(initialState) /* 또는 */ const state = useState(initialState)[0]
		// 등 응용 가능
		const someEventTriggered = () => {
			const newState = 1
			// 상태값을 변경하는 함수를 통해서만 변경 가능(Class Component의 this.setState())
			setState(newState)
			// this.setState와 비슷하게 함수형으로 변경 가능
			setState(prevState => prevState++)
		}
// ..
```

## useEffect()
effect를 발생시키는 함수를 인자로 받아 실행
(Class Component의 lifecycle(componentDidMount, componentDidUpdate, componentWillUnmount)을 대체함)
### 사용
```jsx
	useEffect(() => {/* 함수 인자 */
		/* componentDidMount, componentDidUpdate와 비슷하나, 렌더링 "완료 후" 실행됨 */
		렌더링_후_실행할_함수()
		return () => {/* 정리 함수를 실행할 필요가 없다면 return하지 않아도 된다 */
			/* componentWillUnmount */
			정리_함수()
		}
	}, [렌더링을_시킬_값 /* watch*/ ]
	/* 어떠한 값(props, state 등)에도 반응(리렌더링)하게 하려면 인자 생략, 최초 생성 시(componentDidMount)에만 반응하게 하려면 빈 배열([])을 둔다 */)
```
```jsx
import React, { useState, useEffect } from 'react'
// in some component
// ..
		let toggle = false
		const [state, setState] = useState(-1)
		const someEventTriggered = () => {
			setState(prevState => prevState++)
		}
		useEffect(() => {
			toggle = !toggle
		}, [state])
		return (
			<button onClick={ someEventTriggered }>토글(state: { state })</button>
		)
// ..
```

## useContext()
Context 객체(React.createContext)의 현재 값을 반환
Context - [https://ko.reactjs.org/docs/context.html](https://ko.reactjs.org/docs/context.html)
(global state)

### 사용
```jsx
import React, { createContext, useState, useContext } from 'react'

const Context = createContext()

// 컴포넌트
const Component = () => {
	// state 초기화
	const [watchValue] = useState(-1)
	return (
		{/* 자식 컴포넌트에서  */}
		<GetContext.Provider value={ watchValue }>
			<ChildComponent/>
		</GetContext.Provider>
	)
}

// (Context.Provider 내에 선언된) 자식 컴포넌트
function ChildComponent = () => {
	// Context 객체를 사용해 useContext를 써서 Context.Provider에 value 내에 선언된 값을 받는다
	const { watchValue } = useContext(Context)
	return (
		<span>watchValue: { watchValue }</span>
	)
}
```

## useReducer()
useState와 비슷하나, 인자값으로 reducer을 받는다.
reducer는, state가 변경될(변경되려고 할) 경우, 인자로 넘어온 action 값에 따라 처리를 해주는 함수다.
```jsx
const reducer = (state, action) => {
	const type = action.type
	if (type === 'ACTION_1') {
		return 변경될_state1 /* state를 변경하지 말고 새로운 값을 리턴할 것 state.push('123'); return state */
	} else if (type === 'ACTION_2') {
		return 변경될_state2 /* state를 변경하지 말고 새로운 값을 리턴할 것 state.push('123'); return state */
		// ..
	} else {
		return state
	}
}
```
useReducer는 이 reducer를 인자로 받아, 상태값 및 dispatch(reducer를 실행하여 상태값을 처리하게 할 함수)를 리턴받는다
```jsx
	const [상태값, 디스패쳐] = useReducer(리듀서, 초기값, 초기화함수)
```

## 어플리케이션 작동 방식
기본적으로 02-try-hook을 기존 클래스 방식에서 hook으로 전환한 거임
### hook 사용 및 전환

### Context, Reducer을 사용한 광역 상태값 관리
React에서 기본으로 제공하는 Context를 사용하여, redux를 사용하지 않고 상태값을 관리할 수 있도록 구현

### 구조
redux의 구현 방식 중 하나인 [container-presentational-component](https://medium.com/@lyhlg0201/react-container-presentational-1bbc701b7fd4) 방식을 사용

#### components
화면을 구현하는 컴포넌트(Presentational Components) 들이 정의되어 있고, 각 컴포넌트에서는 props 또는 props를 통해 연산된 값만을 단순히 출력할 수 있도록 처리
(연산은 container에 위임)

#### containers
데이터를 처리하는 컴포넌트(Container Components) 들이 정의되어 있고, 각 상태값을 dispatcher를 통해 처리하여 전달하는 역할을 수행

#### contexts
어플리케이션의 상태값 및 dispatcher들을 관리하는 Context를 정의
Context의 Provider에 관련 객체들을 전달하여 하위 컴포넌트들이 상태값 및 dispatcher에 접근할 수 있도록 함

#### reducers
dispatcher가 요청한 처리를 수행하고 상태값을 바꾸어주는 reducer를 정의
실질적인 상태값 변경을 처리함

#### constants
공통으로 사용하는 상수 정의
