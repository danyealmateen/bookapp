import React from "react";
import "./App.css";
import Books from "./Books/Books";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList/BookList";
import { useState } from 'react';

function App() {

  const [bookAdded, setBookAdded] = useState(false);

  const handleBookAdded = () => {
    setBookAdded(!bookAdded)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/create" element={<Books handleBookAdded={handleBookAdded} />} />
        </Routes>
      </BrowserRouter>
      <BookList bookAdded={bookAdded} />
    </div>
  );
}

export default App;
