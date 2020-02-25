
import React,  { Component, useState } from "react";
import "./NavBar.scss";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Route, Link, useHistory } from 'react-router-dom';


export default function NavBar(props) {

  const [state, setState] = useState('');
  
  function Navchange(e) {
    console.log('change thing', e.target.value)

    props.setSearch(e.target.value);
  }

  function onSubmit(e)  {
   props.onClick();
    console.log("serached item in nav bar -->", state)
  }


  return (
    <div>
    <Navbar bg="danger" variant="dark">
    <Navbar.Brand href="/">Fooddee</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/signIn">Login</Nav.Link>
      {/* <Nav.Link href="#features">Location</Nav.Link> */}
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
  
  </div>
  )
}

