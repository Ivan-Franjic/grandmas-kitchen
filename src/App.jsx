import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Main_dishes from "./components/main_dishes";
import Appetizers from "./components/appetizers";
import Soupes from "./components/soupes";
import Desserts from "./components/desserts";
import Drinks from "./components/drinks";
import Details from "./components/details";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/main_dishes" element={<Main_dishes />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/soupes" element={<Soupes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/details/:dishId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
