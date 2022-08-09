//components
import Navbar from "./components/Navbar";
import BooksCrudApp from "./components/BooksCrudApp";
import AllBooks from "./components/AllBooks";
import AddBook from "./components/AddBook";
import EditBook from './components/EditBook';

import "./App.css";

//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksCrudApp />} />
        <Route path="/all" element={<AllBooks />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
