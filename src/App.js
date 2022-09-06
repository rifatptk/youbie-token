import "./App.css";

import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
