import React from "react";

function Greeting(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Greeting name="Sunami" age="21" />
    </div>
  );
}

export default App;
