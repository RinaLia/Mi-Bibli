import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../asset/img/book.jpg";

class detail extends Component {
  render() {
    return (
      <>
        <div className="detail">
          <div className="half-cover">
            <div className="w-100 cover-content d-flex justify-content-between p-4">
              <div className="back">
                <Link to="/" className=" back-btn btn ">
                  Back
                </Link>
              </div>
              <div className="option-btn">
                <h3 className="text-white">
                  <a>Edit</a>&nbsp;| <a>Delete</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="full-cover w-100 d-flex justify-content-end container">
            <img className="img-fluid" src={book} alt="full-cover" />
          </div>
          <div className="book-details container">
            <div className="tag">
              <h4>
                <span className="badge badge-detail text-white">Romance</span>
              </h4>
            </div>
            <Row>
              <Col xs={12} md={9} lg={9}>
                <div className="title d-flex justify-content-between">
                  <h3>The Map of Salt and Stars</h3>
                </div>
                <h6>By Jennifer</h6>
              </Col>
            </Row>
            <Row className="desc d-flex mt-3 mb-5">
              <Col md={8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
              <Col md={4} className="borrow d-flex justify-content-end">
                <Button type="button" className="brw align-self-end">
                  Borow
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default detail;
