import React from 'react'
import { render, screen, fireEvent, server, extraHandlers } from '../redux/test-utils'

import LoginCard from './Login'

test('Login function works, and shows error if down', async () => {
  render(<LoginCard/>)
  const inputUsername = screen.getByLabelText('Username')
  const inputPassword = screen.getByLabelText('Password')
  const buttonSubmit = screen.getByText('Submit')

  const username = 'user'
  const password = 'pass'

  // Type in username
  fireEvent.input(inputUsername, { target: { value: username } })
  fireEvent.input(inputPassword, { target: { value: password } })

  expect(inputUsername).toHaveValue(username)
  expect(inputPassword).toHaveValue(password)

  // Log in
  fireEvent.click(buttonSubmit)
  screen.getByText('Logging in')

  await screen.findByText('Logged in')

  // Input and buttons are disabled
  expect(inputUsername).toBeDisabled()
  expect(inputPassword).toBeDisabled()
  expect(buttonSubmit).toBeDisabled()
})

test('Login fails gracefully when API is down', async () => {
  server.use(
    extraHandlers.networkError.get('/api/core/user/'),
    extraHandlers.networkError.post('/api/core/login/')
  )
  render(<LoginCard/>)
  fireEvent.click(screen.getByText('Submit'))

  await screen.findByText('Error logging in')
})
