import Books from "./Books";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/create" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
