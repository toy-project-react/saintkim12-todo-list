# 10장: [State 끌어올리기](https://ko.reactjs.org/docs/lifting-state-up.html)

## 데이터 동기화
- 한 컴포넌트에서가 아닌 자식들 간의 데이터(state)의 동기화가 필요할 때,
- 그들의 부모 컴포넌트에서 state로 관리하고, 자식 컴포넌트들에서는 props로 데이터를 읽도록 처리하는 과정이 **State 끌어올리기** 이다.
