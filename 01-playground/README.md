# 01-playground
리액트 스터디를 진행하며 작성했었던 사항들 정리

## 참고/실습 문서
React 공식 문서(한글) - 주요 개념 부분 실습
  - [https://ko.reactjs.org/docs/hello-world.html[1장]](https://ko.reactjs.org/docs/hello-world.html)

## 프로젝트 구성
- 환경
  - Mac
  - nvm(npm)
  - Node.js
  - vscode
    ```bash
    # bash
    npx create-react-app 01-playground
    ```
    ```bash
    # bash
    npm start
    ```

- 소스 구성
  - ./src/ 내부에 index-(챕터/제목).js 형태로 구성
  - 실제 실행 시에는 index.js로 이름을 바꾸어 작업 사항을 확인함
  
## 학습 내용 정리

### 설치
1. haha
### 1장: [Hello World](https://ko.reactjs.org/docs/hello-world.html)
- ReactDOM.render()  (가장 단순한 React 예시)
- 엘리먼트/컴포넌트
    - React App의 구성 블록
    - 재사용 가능한 조각들
- [JavaScript 기본 지식](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript)
    - Skip 혹은 추후 참조

### 2장: [JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)
- JSX
    - JavaScript를 확장한 형태
    - React 엘리먼트를 생성
    - React 사용 시 필수는 아니지만, 시각적으로 도움이 됨
```javascript
// jsx
const element = <h1>Hello, world!</h1>
```
- JSX 사용 실습
- JSX는 표현식
    - = JavaScript 객체
- JSX 속성(Attribute) 정의
		- 속성명은 camelCase 형태로 사용해야 함
		    - class > className
				- tabindex > tabIndex
		- 표현식 사용 가능
```javascript
const element = <h1 tabIndex="0">Hello, world!</h1>
const imgSrc = `https://...`
const elementImg = <img src={imgSrc}/>
```
- React.createElement()로 사용 가능
    - Babel로 컴파일 시 React.createElement() 형태로 변경
```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
```

### 3장: [엘리먼트 렌더링](https://ko.reactjs.org/docs/rendering-elements.html)
- 엘리먼트
    - React 앱의 가장 작은 단위
    - DOM 엘리먼트와 다르게 일반 JavaScript 객체
    - != 컴포넌트
- 렌더링 된 엘리먼트 업데이트
    - 새로운 엘리먼트를 생성하여 ReactDOM.render()로 전달
    - 실제로는 매번 다시 render 하도록 해도 변경된 부분(ex. 텍스트)만 업데이트함

### 4장: [Component & Props](https://ko.reactjs.org/docs/components-and-props.html)
- 컴포넌트
    - React 엘리먼트(들)를 반환하는 함수/클래스같은거
    - 컴포넌트 명은 대문자로 시작
    - 컴포넌트를 합성하거나 추출할 수 있음
```javascript
// 함수형
function WelcomeFunc(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형(ES6)
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// 둘은 React적으로 동일함

// 사용
const element = <WelcomeFunc name="func"/>
```
- Props
    - 컴포넌트가 가진/전달받은 데이터
    - 읽기 전용

### 5장: [State & Lifecycle](https://ko.reactjs.org/docs/state-and-lifecycle.html)
- State
    - 컴포넌트가 내부에 가진 상태값
    - 변경 가능
        - 단 constructor 내에서는 =로, 그 외에서는 this.setState({})를 사용해야함
        - 업데이트는 비동기적일 수 있음(this.setState(updateFunc) 형태로 함수형태로 사용하면 OK)
        - 변경값은 병합됨(정의하지 않은 다른 값들은 삭제되는 것이 아님)

- 생성주기 함수
    - 컴포넌트의 상태에 따라 호출되는 함수
    - componentDidMount: 컴포넌트 생성 직후
    - componentWillUnmount: 컴포넌트 삭제 직전
    - ...

### 6장: [이벤트 처리](https://ko.reactjs.org/docs/handling-events.html)
- 이벤트 처리
    - DOM 엘리먼트 이벤트 처리와 유사(onclick="func()" 등)
    - return false가 이벤트 중단을 의미하지 않음(e.preventDefault() 사용)
- 바인딩
    - 클래스 컴포넌트 내에 정의한 함수를 this.함수명으로 사용하기 위해, 해당 함수를 컴포넌트에 연결
```javascript
// 1. 생성자에서
  constructor(props) {
    super(props);
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      // ...
  }
// 2. (실험적인) 퍼블릭 클래스 필드 문법
  handleClick2 = () => {
      // ...
  }
// 3. 바인딩 없이 콜백에 화살표 함수 사용(render에서)
  handleClick3() {
      // ...
  }
  render() {
      // ...
      <button onClick={(e) => this.handleClick3(e)}/>
      // ...
  }
```
- 이벤트 함수에 인자 전달
```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 확인 혹은 참고자료
- 실전 튜토리얼(React 공식): [https://ko.reactjs.org/tutorial/tutorial.html](https://ko.reactjs.org/tutorial/tutorial.html)
