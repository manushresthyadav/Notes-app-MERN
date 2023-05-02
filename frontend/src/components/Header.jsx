import React, { useState } from 'react'
import { Navbar,Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../actions/UserActions'
const Header = ({setSearch}) => {
  const [check,setCheck]=useState(false)
  // const history=useHistory()
  const dispatch=useDispatch()
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
  const navigate=useNavigate()
  const logoutHandler=()=>{
    dispatch(logout())
    navigate('/')
  }

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
              onChange={(e)=>setSearch(e.target.value)}
            />
           
          </Form>
            </Nav>
            {userInfo ? (<Nav
            className="me-auto my-2 my-lg-0 mr-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes"><Link to='/mynotes'>My Notes</Link></Nav.Link>
            <NavDropdown title={`${userInfo && userInfo.name}`} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>)
  :<Nav><Nav.Link href="/mynotes"><Link to='/login'>Login</Link></Nav.Link></Nav>  
  } 
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header