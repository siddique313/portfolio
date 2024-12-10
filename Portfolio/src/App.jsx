import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Pics from "./Components/Pics";

function App() {
  return (
    <>
<<<<<<< HEAD
      {/* <Header /> */}
      {/* <Filter /> */}
      <Pics />
=======
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo bg-slate-950" alt="Vite logo" />
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> cdde7703563b270be571707ab63b6f69ffcc4b96
    </>
  );
}

export default App;
