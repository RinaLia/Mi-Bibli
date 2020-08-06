import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import TopNav from "./topNav";
import book from "../asset/img/book.jpg";

class home extends Component {
  render() {
    return (
      <>
        <TopNav />
        <div className="home">
          <div className="bg-home">
            <div className="w-100 cover-content img-fluid"></div>
          </div>
        </div>
        <Row className="w-100 d-flex justify-content-center">
          <div className="card-book">
            <img
              style={{ width: 130, height: 180 }}
              src={book}
              alt="card-book"
            />
            <div className="title mt-2 text-center font-weight-bold">
              <p>Map of Salt </p>
            </div>
          </div>
        </Row>
      </>
    );
  }
}
export default home;
