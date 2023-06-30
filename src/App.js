import Books from "./Books";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Books />
    </div>
  );
}
export default App;
