//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import Header from "./Components/Nabvar/Header";
import Footer from "./Components/Footer/Footer";
import Detalle from "./Components/Card/CardDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/detalle/:id" element={<Detalle/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
