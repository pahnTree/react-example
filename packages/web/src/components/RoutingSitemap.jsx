import React from 'react'
import { Switch, Route } from 'react-router'

const RoutingSitemap = () => {
  // Should look the same as ./Routing.jsx, but without components
  return (
    <Switch>
      <Route exact path='/' />
      <Route path='/login' />
      <Route path='/logout' />
    </Switch>
  )
}

export default RoutingSitemap
