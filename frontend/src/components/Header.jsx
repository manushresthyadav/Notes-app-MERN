import React from 'react'
import { Navbar,Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
     <Navbar bg="primary" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand><Link to='/'>Note Zipper</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0 mr-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes"><Link to='/mynotes'>My Notes</Link></Nav.Link>
            <NavDropdown title="shobhnik" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header