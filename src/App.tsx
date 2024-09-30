import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Make a network request using fetch
  // This is not an error because we added a fetch polyfill
  // in our eslint settings
  fetch("google.com");

  // Instantiate PaymentRequest
  const req = new PaymentRequest();

  // Instantiate IntersectionObserver
  const observer = new IntersectionObserver(() => {});

  const foo = Object.values({});

  const boo = new ResizeObserver();

  const str = "Hello, world!";
  const newStr = str.replaceAll("world", "JavaScript");

  console.log(req, observer, foo, boo, newStr)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
