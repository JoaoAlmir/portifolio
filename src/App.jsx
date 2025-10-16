import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Language from "./context/Language.jsx";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Language.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Language.Provider>
  );
}

export default App;
