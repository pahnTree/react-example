import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useLogoutMutation } from '../redux/api/core/user'

const Logout = () => {
  const [
    doLogout,
    { isUninitialized, isLoading, isSuccess, isError }
  ] = useLogoutMutation()

  if (isUninitialized) {
    doLogout()
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Logout</h1>
          {isLoading && <div>Logging out</div>}
          {isSuccess && <div>Logged out</div>}
          {isError && <div>Error logging out</div>}
        </Col>
      </Row>
    </Container>
  )
}

export default Logout
