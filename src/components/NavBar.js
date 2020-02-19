
import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {

  return (
    <div>
    <Navbar bg="danger" variant="dark">
    <Navbar.Brand href="/">Fooddee</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/signIn">Login</Nav.Link>
      <Nav.Link href="#features">Location</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  </div>
  )
}

