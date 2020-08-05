import React, { Component } from "react";
import {
  Row,
  Col,
  Image,
  NavItem,
  Container,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./topNav";

class profile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Row className=" no-gutters">
          <Col
            xs={5}
            md={3}
            lg={3}
            className="card-profile  d-flex justify-content-center align-self-center "
          >
            <Image className="img-fluid avatar-img" />

            {/* <NavItem>
              <Link
                link
                className="nav-link text-decoration-none text-dark font-weight-bold"
                to="/history"
              >
                History
              </Link>
            </NavItem> */}
          </Col>
          <Col
            xs={7}
            md={9}
            lg={9}
            className="flex justify-content-center mt-4"
          >
            <Container fluid>
              <Card>
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your name"
                      />
                    </Form.Group>
                    <Button className="btn-auth" type="submit">
                      Update
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}
export default profile;
