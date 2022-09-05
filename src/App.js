import React, {useState} from "react";

function App() {
  const [cnt, setCnt] = useState(0);

  function btn () {
    setCnt(cnt+1);
    console.log("클랙됐습니다")
  }
  return (
    <div>
      <span>Total click : {cnt}</span>
      <button onClick={ btn }>click me</button>
    </div>
  );
}

export default App;
