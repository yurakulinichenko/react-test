import "./App.css";
import React from "react";

import List from "./components/List";
import Details from "./components/Details";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/users" element={<List />} />
          <Route path="/users/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
