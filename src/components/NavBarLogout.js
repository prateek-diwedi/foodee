
import React,  { Component, useState } from "react";
import "./NavBarLogout.scss";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Route, Link, useHistory } from 'react-router-dom';


export default function NavBarLogout(props) {

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
      <Nav.Link href="/signIn">Login As name</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"   
      onChange={Navchange}
      />
   
      <Button variant="outline-light" onClick={onSubmit} onChange={Navchange}> 
        Search
      </Button>
      <div className="space"> 
      <Button  variant="outline-light">Logout</Button>
      </div>
    </Form>
  </Navbar>
  
  </div>
  )
}

