import React from 'react'

import { Redirect } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginCard from '../components/Login'

import { useUserQuery } from '../redux/api/core/user'

const Login = () => {
  const {
    data: user
  } = useUserQuery()

  return (
    <Container>
      {user?.isAuthenticated
        ? <Redirect to='/'/>
        : <Row>
          <Col lg={4}>
            <LoginCard/>
          </Col>
      </Row>}
    </Container>
  )
}

export default Login
