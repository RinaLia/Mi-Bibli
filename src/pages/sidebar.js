import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import TopNav from "./topNav";

class sidebar extends Component {
  render() {
    return (
      <>
        <TopNav />
        <div class="wrapper d-flex align-items-stretch">
          <Nav id="sidebar"></Nav>
        </div>
      </>
    );
  }
}

export default sidebar;
