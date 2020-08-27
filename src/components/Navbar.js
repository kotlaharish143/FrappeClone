import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import '../css/Navbar.css'
import logo from '../images/frappe-books-logo.svg'
export default function navbar() {
 

    return (
        <div className="">
             <Navbar className="py-3 container" expand="lg">
              <Navbar.Brand href="" className="font-weight-bold"><img src={logo} style={{width:80}} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ml-auto">
                  <Nav.Link href="#" className=" mr-4 link_item">Docs</Nav.Link>
                  <Nav.Link href="#" className=" mr-4 link_item">Github</Nav.Link>
                  <Nav.Link href="#" className=" mr-4 link_item">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
         <hr class="my-0"></hr>
        </div>
    )
  }
  