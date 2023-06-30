import React from "react";
import Books from "./Books/Books";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList/BookList";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/create" element={<Books />} />
        </Routes>
      </BrowserRouter>
      <BookList />
    </div>
  );
}
export default App;
