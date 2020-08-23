import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Modal,
  ModalTitle,
  ModalFooter,
  ModalDialog,
  ModalBody,
} from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class topNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogoutModal: false,
    };
    this.toggleLogoutModal = this.toggleLogoutModal.bind(this);
  }
  toggleLogoutModal() {
    this.setState({
      showLogoutModal: !this.state.showLogoutModal,
    });
  }
  logoutAuth = () => {
    this.props.logout();
    console.log(this.props);

    // this.props.history.push("/login");
  };
  render() {
    return (
      <>
        <Navbar collapseOnSelect className="nav" expand="lg">
          {console.log(this.props)}

          <Navbar.Brand href="#home">Mi BiBli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link onClick={this.props.logOut}>Logout</Nav.Link>
              {/* <ModalDialog>
              <ModalHeader closeButton>
                <ModalBody>
                  <p>Are you sure to logout?</p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="secondary">Yes</Button>
                  <Button variant="primary">No</Button>
                </ModalFooter>
              </ModalHeader>
            </ModalDialog> */}
              {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
              />
              <Button className="btn-auth mt-2">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {console.log("modal =>", this.state.showLogoutModal)}
        {/* <ModalDialog isOpen={this.state.toggleLogoutModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button color="danger" onClick={this.logoutAuth}>
              Logout
            </Button>
            <Button color="secondary" onclick={this.toggleLogoutModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </ModalDialog> */}
      </>

      // Logout Modal
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(topNav);
