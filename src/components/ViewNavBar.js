import React, { useState } from "react";
import "./ViewNavBar.scss";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

import Cookies from 'js-cookie';


export default function NavBar(props) {

  const [state, setState] = useState('');

  let loggedInUser = Cookies.get('name');

  function Navchange(e) {
    props.setSearch(e.target.value);
  }

  function onSubmit(e) {
    props.onClick();
  }

  const logoutUser = () => {
    Cookies.remove('name');
    Cookies.remove('id');
    Cookies.remove('email');
    window.location.reload();
  }


  return (
    <div>
      {!loggedInUser ? (
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand href="/">Fooddee</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/signIn">Login</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
              onChange={Navchange}
            />
            <Button variant="outline-light" onClick={onSubmit} onChange={Navchange}>
              Search
            </Button>
          </Form>
        </Navbar>
      ) : (
          <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="/">Fooddee</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/search/49.2813127/-123.1145121/pizza">Back to main page</Nav.Link>
              {/* <Nav.Link href=`/search/${props.match.params.lat}/${props.match.params.lon}/${search}`>Back to main page</Nav.Link> */}
              <Nav.Link href={`/profile/${loggedInUser}`}>Logged in as : {loggedInUser}</Nav.Link>
            </Nav>
            <Form inline>
              <div className="space">
                <Button variant="outline-light" onClick={logoutUser}>Logout</Button>
              </div>
            </Form>
          </Navbar>
        )
      }
    </div>
  )
}

