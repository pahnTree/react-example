import React from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

import { useUserQuery } from '../redux/api/core/user'

const MainLinks = () => (
  <Nav className='me-auto'>
    <Nav.Link as={Link} to='/'>Home</Nav.Link>
  </Nav>
)
const AuthLinks = ({ user }) => {
  const { isAuthenticated } = user
  return (
   <Nav className='ml-auto'>
    {isAuthenticated
      ? <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
      : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
    }
    </Nav>
  )
}
AuthLinks.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
    isAuthenticated: PropTypes.bool
  }).isRequired
}

const Header = () => {
  const {
    data: user,
    isSuccess
  } = useUserQuery()

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Midpoint</Navbar.Brand>
        <Navbar.Toggle aria-controls='midpoint-navbar-nav'/>
        <Navbar.Collapse id='midpoint-navbar-nav' className='justify-content-end'>
          <MainLinks/>
          {isSuccess && <AuthLinks user={user}/>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
