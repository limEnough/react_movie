
import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log("bye :(");
  }
  function effectFn () {
    // hello 컴포넌트를 hide할 때에는 컴포넌트 자체를 그리지 않기에 콘솔로그도 찍히지 않음.
    console.log("created :)");

    // clean-up function : 컴포넌트가 사라질 때 실행되는 함수는 return 문에 작성
    return destroyedFn;
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
