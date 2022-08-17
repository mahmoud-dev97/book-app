import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { books } from "../bookInfo";

function Book() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // get Book by Id
  useEffect(() => {
    const getProducts = () => {
      books.map((e) => (e.id === +id ? setData(e) : ""));
    };
    getProducts();
  }, [id]);

  const handelClick = () => {
    setArr([data, ...arr]);
  };

  useEffect(() => {
    const book = JSON.parse(localStorage.getItem("user_fav"));
    if (book) {
      setArr(book);
    }
  }, []);

  // set localStorage
  useEffect(() => {
    localStorage.setItem("user_fav", JSON.stringify(arr));
    localStorage.setItem("disabled", "false");
  }, [arr]);

  // disabled btn
  useEffect(() => {
    arr.forEach((e) => {
      if (e.id === +id) {
        localStorage.setItem("disabled", "true");
        setDisabled(JSON.parse(localStorage.getItem("disabled")));
      }
    });
  }, [arr, id]);

  return (
    <Row className="my-5 py-5 justify-content-between">
      <Col lg={4} sm={12} className="text-center mb-5 mb-lg-0">
        <img className="w-100" src={data.img} alt={data.title} height="400px" />
      </Col>
      <Col lg={7} sm={12}>
        <h1 className="display-5 fw-bold">{data.title}</h1>
        <h5 className="fw-bold mt-2 text-primary">{data.author}</h5>
        <p>
          <small className="text-muted">{data.year}</small>
        </p>
        <p className="my-2 fw-bold">
          Rating {data.rate}
          <i className="fa fa-star text-warning"></i>
        </p>
        <p className="fs-6 text-black-50">{data.description}</p>
        <Button
          disabled={disabled}
          variant="outline-danger"
          onClick={handelClick}
        >
          <i className="fa-solid fa-heart-circle-plus"></i>
        </Button>
      </Col>
    </Row>
  );
}

export default Book;
