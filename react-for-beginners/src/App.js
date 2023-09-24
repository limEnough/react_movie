
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('i run only once.');
  }, []); //아무것도 바라보지 않으니 한번만 실행
  useEffect(() => {
    console.log("i run when 'keyword' changes.")
  }, [keyword]); //keyword가 변화할때 코드 실행
  useEffect(() => {
    console.log("i run when 'counter' changes.")
  }, [counter]); //counter가 변화할때 코드 실행
  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' changes.")
  }, [keyword, counter]); //keyword, counter 모두 변화할때 코드 실행
  
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"  
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"continue"}/> */}
    </div>
  );
}

export default App;
