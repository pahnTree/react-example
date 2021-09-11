import React from 'react'
import { Switch, Route } from 'react-router'

import Header from './Header'

import Home from './core/Home'
import Login from './core/Login'
import Logout from './core/Logout'

const App = () => (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/logout'><Logout/></Route>
      </Switch>
    </div>
  )

export default App
