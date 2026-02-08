import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import './App.css'
function App() {
  return (
    <BrowserRouter>


   <center>
       <Routes>
        <Route path="/" element={<h1>GARDEN TSS</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Routes>
            <NavBar />
   </center>
    </BrowserRouter>
  );
}

export default App;
