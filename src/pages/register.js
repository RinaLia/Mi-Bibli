import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/actions/auth";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  register = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
  };

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
                  <Form onSubmit={this.register}>
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        className="email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </FormGroup>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        className="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Button
                      onChange={this.registerUser}
                      className="btn-auth"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <div className="footer mt-1">
                      <span>Already have account? Please</span>
                      <Link to="/login">
                        <span> login</span>
                      </Link>
                    </div>
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

export default Register;
