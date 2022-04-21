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
    isAuthenticated: PropTypes.bool
  }).isRequired
}
AuthLinks.defaultProps = {
  user: {
    isAuthenticated: false
  }
}

const Header = () => {
  const {
    data: user
  } = useUserQuery()

  return (
    <Container>
      <Navbar className='mb-3'>
        <Navbar.Brand as={Link} to='/'>Midpoint</Navbar.Brand>
      </Navbar>
      <Navbar bg='light' expand='lg' className='mb-3'>
        <Navbar.Toggle aria-controls='midpoint-navbar-nav' />
          <Navbar.Collapse id='midpoint-navbar-nav' className='justify-content-end'>
            <MainLinks />
            <AuthLinks user={user} />
          </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
