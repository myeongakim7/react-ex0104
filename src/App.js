import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // state 정의
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const addCount = () => {
    setCount(count + 1);
    // count++; < 이렇게 하면 안됨
  };
  const descCount = () => {
    setCount(count - 1);
  };

  console.log("App 랜더링"); // clg에서 2번찍힘

  // useEffect(함수, [상태변수=의존값]);

  // useEffect(() => {
  //   console.log("하이염");
  // });

  // 이렇게 하면 화면 모두 업데이트 => 그래서 누가 바뀌는지 정의해줘야함 - 정의해준 것(상태)만 바뀜
  // [] 의존값(state) 변수는 배열의 형태로 여러개 입력 가능함

  // useEffect(함수) - 모든 상태변화 감지 (비추천)
  // useEffect(함수,[]) - 시작(마운트)할 때 1번만 (초기화개념)
  // useEffect(함수,[변수값]) - [상태변수=state]가 update 할 때마다 실행

  // 상태변수 업데이트 감지
  useEffect(() => {
    console.log("count update");
  }, [count]);

  return (
    <div className="box">
      <h1>App</h1>
      <p>count : {count}</p>
      <button onClick={addCount}>count 증가</button>&nbsp;
      <button onClick={descCount}>count 감소</button>
    </div>
  );
}

export default App;
