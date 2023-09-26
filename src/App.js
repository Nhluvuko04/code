import logo from "./logo.svg";
import "./App.css";
import Create from "./Component/Create";
import Edit from "./Component/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Create/>} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
