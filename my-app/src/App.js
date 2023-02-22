import "./App.css";
import All from "./pages/All";
import { Routes, Route } from "react-router-dom";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
