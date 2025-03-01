import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
      </Routes>
    </>
  );
}

export default App;
