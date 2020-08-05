import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class register extends Component {
  render() {
    return (
      <>
        <Row className="h-100 no-gutters">
          <Col xs={6} md={6} lg={6} className="bg-login">
            <div className="bg-text-login">
              <h1 className="text-white mt-3">Book is a window to the world</h1>
            </div>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <div className="d-flex flex-column w-100 h-100">
              <div className=" text-center mt-3">
                <h1 className="title-auth">Register</h1>
              </div>
              <div className="greeting text-center mt-4 ">
                <h4>Hello, friend!</h4>
                <p>
                  Enter your personal details and start your reading journey
                  with us!
                </p>
              </div>
              <div className=" h-80 d-flex mt-2 justify-content-center align-items-center">
                <div className=" d-flex justify-content-center mt-2 ml-2">
                  <Form className="card-login">
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl type="email" placeholder="Enter email" />
                    </FormGroup>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="btn-auth" type="submit">
                      Submit
                    </Button>
                    <p className="mt-3">
                      Already have an account? Please login
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default register;
