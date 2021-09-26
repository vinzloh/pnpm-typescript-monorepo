import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  React.useEffect(() => {
    fetch("/api/notion")
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((r) => r.json())
      .then((res) => {
        console.log(`res:`, res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>aaa Hello Vite + React...</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
