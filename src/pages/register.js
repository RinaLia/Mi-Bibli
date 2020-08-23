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
// import { register } from "../redux/actions/auth";
import { postRegister } from "../store/actions/auth";
import { validateFields } from "../helpers/validationAuth";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = async (e) => {
    e.preventDefault();
    const { email, password, password2 } = this.state;

    console.log(email);
    console.log(password);
    console.log(password2);

    const _validateEmail = validateFields.validateEmail(email);
    console.log("_validateEmail", _validateEmail);

    const _validatePassword = validateFields.validatePassword(password);

    if (_validateEmail.isError) {
      return Swal.fire({
        icon: "error",
        title: "Check again!",
        text: _validateEmail.msg,
      });
    }

    if (_validatePassword.isError) {
      return Swal.fire({
        icon: "error",
        title: "Check again!",
        text: _validatePassword.msg,
      });
    }
    if (password !== password2) {
      return Swal.fire({
        icon: "error",
        title: "Check again!",
        text: "Password not match",
      });
    }

    // await this.props.register(email, password);
    await this.props.postRegister(email, password);
    // console.log("props.register", this.props.register(email, password));
    // if (!this.props.auth.isRegisterError) {
    //   this.props.history.push("/login");
    //   Swal.fire({
    //     icon: "success",
    //     title: "Yeay!!!",
    //     text: "Registration success",
    //   });
    // }
    // await this.props.postRegister(email, password);
  };

  render() {
    if (!this.props.auth.isRegisterError) {
      this.props.history.push("/login");
      Swal.fire({
        icon: "success",
        title: "Yeay!!!",
        text: "Registration success",
      });
      // this.props.history.push("/login");
    }

    // const { email, password } = this.state;
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
                        name="email"
                        onChange={this.handleChange}
                        className="email"
                        type="email"
                        placeholder="Enter email"
                      />
                      {/* <MessageEmail messages={this.msg} /> */}
                    </FormGroup>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        onChange={this.handleChange}
                        className="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Retype Password</Form.Label>
                      <Form.Control
                        name="password2"
                        onChange={this.handleChange}
                        className="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Button
                      onChange={this.register}
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

// const mapDispatchToProps = { postRegister };
// export default connect(null, mapDispatchToProps)(Register);

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { postRegister };
export default connect(mapStateToProps, mapDispatchToProps)(Register);
