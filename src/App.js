import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Game from "./pages/Game";
// import Home from "./pages/Home";
// import Chessboard from "./pages/Chessboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Game />} />
        {/* <Route path="/chessboard" element={<Chessboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
