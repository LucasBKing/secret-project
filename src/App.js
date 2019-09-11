import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Dashboard from './components/dashboard'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
    </Switch>
  )
}

export default App
