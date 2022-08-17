import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { books } from "../bookInfo";
import Pagination from "./Pagination";

function Books() {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);

  // Get current Books
  const indexOfLastBook = currentPage * booksPerPage; // 1 * 8 = 8 / 2 * 8 = 16 / 3 * 8 = 24
  const indexOfFirstBook = indexOfLastBook - booksPerPage; // 8 - 8 = 0 / 16 - 8 = 8 / 24 - 8 = 16
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook); // 0 -> 8 (index 0 to index 7 === 8 books) / 8 -> 16 / 16 -> 24

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); // -> pagenum = 1 || 2 || 3

  return (
    <Row className="mt-5">
      {currentBooks.map((book) => {
        return (
          <Col lg={3} md={6} className="mb-4" key={book.id}>
            <Card className="h-100 p-4 border-0 shadow">
              <Card.Img
                src={book.img}
                variant="top"
                alt={book.title}
                height="300px"
              />
              <Card.Body className="p-0 mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title className="card-title mb-0">
                    {book.title.substring(0, 20)}...
                  </Card.Title>
                </div>
                <Link
                  to={`/${book.id}`}
                  className="w-100 mt-4 btn btn-outline-primary"
                >
                  View Book
                </Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
      <Pagination paginateNum={paginate} />
    </Row>
  );
}

export default Books;
