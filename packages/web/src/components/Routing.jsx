import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/login'><Login/></Route>
      <Route path='/logout'><Logout/></Route>
    </Switch>
  )
}

export default Routing
