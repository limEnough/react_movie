
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onchange = (event) => setToDo(event.target.value);
  console.log(toDo);

  return (
    <div>
      <form>
        <input onChange={onchange} value={toDo} type="text" placeholder="write your to do.." />
      </form>
    </div>
  )
}

export default App;
