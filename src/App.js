import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";
import Chessboard from "./pages/Chessboard/Chessboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chessboard" element={<Chessboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
