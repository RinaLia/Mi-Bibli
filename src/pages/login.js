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

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    console.log(this.state.email);

    console.log(this.state.password);
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
                <h1 className="title-auth">Login</h1>
              </div>
              <div className="greeting text-center mt-4 ">
                <h4>Welcome Back!</h4>
                <p>
                  To keep connected with us please login with your personal info
                </p>
              </div>
              <div className=" h-80 d-flex mt-2 justify-content-center align-items-center">
                <div className=" d-flex justify-content-center mt-2 ml-2">
                  <Form onSubmit={this.login}>
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
                      onChange={this.login}
                      className="btn-auth"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <div className="footer mt-1">
                      <span>Don't have account?</span>
                      <Link to="/register">
                        <span> Click here</span>
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

export default login;
