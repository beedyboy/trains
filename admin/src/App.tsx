import React from "react";  
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Subscribers from './pages/Subscribers';
import "./styles.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subscribers" element={<Subscribers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
