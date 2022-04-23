import React, { useState } from 'react'

import {
  Card,
  Form,
  Button
} from './styled'

import { useLoginMutation, useUserQuery } from '../redux/api/core/user'

const Login = () => {
  const {
    data: user
  } = useUserQuery()

  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })
  const [
    doLogin,
    {
      data,
      isLoading: loggingIn,
      isSuccess: loggedIn,
      isError: errorLogin
    }
  ] = useLoginMutation()

  function handleChange (e) {
    setCreds(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    doLogin(creds)
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title><h1>Login</h1></Card.Title>
        {loggingIn && <div>Logging in</div>}
        {errorLogin && <div>Error logging in </div>}
        {loggedIn && data?.message === 'success' && <div>Logged in</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='username' className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              name='username'
              onChange={handleChange}
              disabled={loggingIn || loggedIn || user?.isAuthenticated}
            />
          </Form.Group>
          <Form.Group controlId='password' className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              onChange={handleChange}
              disabled={loggingIn || loggedIn || user?.isAuthenticated}
            />
          </Form.Group>
          <Button
            type='submit'
            className='btn btn-primary'
            disabled={loggingIn || loggedIn || user?.isAuthenticated}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login
