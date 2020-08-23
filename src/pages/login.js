import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postRegisterReset, postLogin } from "../store/actions/auth";
import { validateFields } from "../helpers/validationAuth";
import Swal from "sweetalert2";
import auth from "../store/reducers/auth";

class Login extends Component {
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

  onLogin = async () => {
    const { email, password } = this.state;

    await this.props.postLogin(email, password);
    // console.log("auth reducer", this.props.auth);
    console.log("auth reducer", this.props.auth);

    // const { status } = login;

    // if ( status === 500 && isErorr === true ) {
    //   Swal.fire({
    //     icon: "error",
    //     text: errorMsg,
    //   });

    // if (status === 200) {
    // this.props.history.push("/");
    // Swal.fire({
    //   icon: "success",
    //   title: "Yeay",
    //   text: "Youre Logged In",
    //   timer: 3000,
    // });
    // } else {
    //   const { message } = login.status.message;
    //   this.setState({
    //     error: true,
    //     errorMsg: message,
    //     isLoading: false,
    //   });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email);

    console.log(password);

    const _validateEmail = validateFields.validateEmail(email);
    const _validatePassword = validateFields.validatePassword(password);

    if (email.length === 0 && password.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "Fill all forms",
      });
    }

    if (_validateEmail.isError) {
      return Swal.fire({
        icon: "error",
        title: "Check again!",
        text: _validateEmail.msg,
        timer: 3000,
      });
    }

    if (_validatePassword.isError) {
      return Swal.fire({
        icon: "error",
        title: "Check again!",
        text: _validatePassword.msg,
        timer: 3000,
      });
    }

    await this.onLogin();

    // this.props.history.push("/");
    // Swal.fire({
    //   icon: "success",
    //   title: "Yeay!",
    //   text: "Youre Logged In",
    //   timer: 3000,
    // });
  };

  componentDidMount() {
    this.props.postRegisterReset();
  }

  componentDidUpdate(prevState, _prevProps) {
    console.log("prevState", prevState);
    console.log("prevState.auth", prevState.auth.errMsg);
    console.log("this.props.auth.isLoginError", this.props.auth.isLoginError);

    // console.log("auth", prevProps);

    // console.log("prevProps", prevProps);

    // console.log("nextState", nextState);

    if (prevState.auth.errMsg !== this.props.auth.errMsg) {
      if (this.props.auth.isLoginError) {
        Swal.fire({
          icon: "error",
          title: this.props.auth.errMsg,
        });
      } else {
        this.props.history.push("/");
      }
      //else {
      //   !this.props.auth.isLoginError;
      //   Swal.fire({
      //     icon: "success",
      //   });
      // }
    }

    // if (prevState.auth.isRegisterError !== this.props.auth.isRegisterError) {
    //   Swal.fire({
    //     icon: "success",
    //   });
    // }
    // else {
    //   this.props.auth.isLoginError === false;
    //   // Swal.fire("haloo");
    // }
    //else {
    //   prevState.auth.errMsg === this.props.auth.errMsg; // this.props.history.push("/");
    //   Swal.fire({
    //     icon: "success",
    //   });
    // }
    // if (prevState.auth.errMsg === this.props.auth.errMsg) {
    //   if (this.props.auth.isLoginError) {
    //     this.props.history.push("/");
    //     Swal.fire({
    //       icon: "success",
    //     });
    //   }
    // }
  }

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
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Email address</FormLabel>
                      <FormControl
                        name="email"
                        onChange={this.handleChange}
                        className="email"
                        type="email"
                        placeholder="Enter email"
                      />
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
                    <Button
                      disabled={this.state.isLoading ? true : false}
                      onChange={this.handleSubmit}
                      className="btn-auth"
                      type="submit"
                    >
                      {/* <Spinner
                        as="span"
                        animation="border"
                        role="status"
                        size="sm"
                      /> */}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { postRegisterReset, postLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
