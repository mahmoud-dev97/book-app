import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Favorites() {
  const [arr, setArr] = useState([]);
  const [filterBook, setFilterBook] = useState([]);

  // get data from localStorage
  useEffect(() => {
    const book = JSON.parse(localStorage.getItem("user_fav"));
    if (book) {
      setArr(book);
    }
  }, [filterBook]);

  // set localStorage with new array filterd
  const handelClick = (e) => {
    let bookDelet = arr.filter((item) => item.id !== e);
    setFilterBook(bookDelet);
    localStorage.setItem("user_fav", JSON.stringify(bookDelet));
  };

  return (
    <Row className="mt-5">
      {arr.length > 0 ? (
        arr.map((book) => {
          return (
            <Col lg={6} key={book.id} className="mb-4">
              <Card className="shadow h-100">
                <Row className="g-0">
                  <Col md={4}>
                    <img
                      src={book.img}
                      className="img-fluid rounded-start w-100"
                      alt={book.title}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className="mb-3">{book.title}</Card.Title>
                      <Card.Text>
                        {book.rate}
                        <i className="fa fa-star text-warning"></i>
                      </Card.Text>
                      <Card.Text>
                        <small className="text-muted">{book.author}</small>
                      </Card.Text>
                      <Card.Text>
                        <small className="text-muted">{book.year}</small>
                      </Card.Text>
                      <Button
                        variant="outline-danger"
                        onClick={(e) => handelClick(book.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })
      ) : (
        <Alert variant={"danger"}>
          No book has been added yet, Do you want to add a new
          <Link className="mx-1 alert-link" to="/">
            Book
          </Link>
          ?
        </Alert>
      )}
    </Row>
  );
}

export default Favorites;
