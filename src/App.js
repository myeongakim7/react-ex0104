import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // state 정의
  const [click, setClick] = useState("#ccc");
  const changeClickRed = () => {
    setClick("red");
  };
  const changeClickGreen = () => {
    setClick("green");
  };
  const changeClickBlue = () => {
    setClick("blue");
  };

  useEffect(() => {
    console.log("color click 업데이트");
  }, [click]);

  // 해당 색깔 버튼을 누르면 박스 색이 바뀜
  // 여러 개 만들 수 있음
  return (
    <div className="container">
      <h1>Color App</h1>
      <div className="color-box" style={{ backgroundColor: click }}></div>
      {/* color-box style 배경에 변수 넣기*/}
      <div className="btn-group">
        <button onClick={changeClickRed}>red</button>
        <button onClick={changeClickGreen}>green</button>
        <button onClick={changeClickBlue}>blue</button>
      </div>
    </div>
  );
}

export default App;
