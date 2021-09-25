import React from 'react'
import { Switch, Route } from 'react-router'

import Header from './Header'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

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
