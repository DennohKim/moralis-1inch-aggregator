import "./App.css";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap />}/>
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
