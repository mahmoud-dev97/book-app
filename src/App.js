import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./Components/Book";
import Books from "./Components/Books";
import Favorites from "./Components/Favorites";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Book />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
