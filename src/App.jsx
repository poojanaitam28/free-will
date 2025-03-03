import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
