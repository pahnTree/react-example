import { rest } from 'msw'

const _DATA = {
  users: {
    admin: {
      username: 'admin',
      first_name: 'first',
      last_name: 'last',
      email: 'admin@email.com',
      isAuthenticated: true
    },
    user: {
      username: 'user',
      first_name: 'first',
      last_name: 'last',
      email: 'user@email.com',
      isAuthenticated: true
    },
    anonymous: {
      username: 'anon',
      first_name: 'none',
      last_name: 'none',
      email: 'none@email.com',
      isAuthenticated: false
    }
  }
}
export const handlers = [
  // Auth
  rest.post('/api/core/login/', (req, res, ctx) => {
    const {
      username
    } = req.body
    if (Object.keys(_DATA.users).indexOf(username) >= 0) {
      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('username', username)
      return res(
        ctx.status(200),
        ctx.json({
          ..._DATA.users[username],
          message: 'success'
        })
      )
    }
    return res(
      ctx.status(200),
      ctx.json(_DATA.users.anonymous)
    )
  }),
  rest.get('/api/core/logout/', (req, res, ctx) => {
    sessionStorage.removeItem('is-authenticated')
    return res(
      ctx.status(200),
      ctx.json({
        message: 'loggedout'
      })
    )
  }),
  rest.get('/api/core/user/', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    if (isAuthenticated) {
      const username = sessionStorage.getItem('username')
      return res(
        ctx.json(_DATA.users[username])
      )
    }
    return res(
      ctx.status(200),
      ctx.json(_DATA.users.anonymous)
    )
  }),

  // Final request handler
  rest.get('/api/*', (req, res, ctx) => {
    console.log(`Unhandled GET mock going to '${req.url}'`)
    return res(
      ctx.json({})
    )
  }),rest.post('/api/*', (req, res, ctx) => {
    console.log(`Unhandled GET mock going to '${req.url}'`)
    return res(
      ctx.json({})
    )
  }),rest.delete('/api/*', (req, res, ctx) => {
    console.log(`Unhandled GET mock going to '${req.url}'`)
    return res(
      ctx.json({})
    )
  })
]

export const extraHandlers = {
  users: {
    admin: rest.get('/api/core/user/', (req, res, ctx) => {
      sessionStorage.setItem('is-authenticated', 'true')
      return res(
        ctx.status(200),
        ctx.json({
          username: 'admin',
          first_name: 'first',
          last_name: 'last',
          email: 'admin@email.com',
          roles: ['admin']
        })
      )
    })
  },
  networkError: {
    get: (url, message='') => rest.get(url, (req, res, ctx) =>
      res.networkError(message || 'Network error')
    ),
    post: (url, message='') => rest.post(url, (req, res, ctx) =>
    res.networkError(message || 'Network error')
  ),
  }
}
