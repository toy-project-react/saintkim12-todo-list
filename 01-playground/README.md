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


## 확인 혹은 참고자료
- 실전 튜토리얼(React 공식): [https://ko.reactjs.org/tutorial/tutorial.html](https://ko.reactjs.org/tutorial/tutorial.html)
