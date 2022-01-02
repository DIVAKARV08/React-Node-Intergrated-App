import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  const getdata = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    console.log(data);
    setState(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>

      {state.map((item, index) => {
        const { name, age } = item;
        return (
          <div key={index}>
            <h1 style={{ color: "green" }}>Name : {name}</h1>
            <h2>Age : {age}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
