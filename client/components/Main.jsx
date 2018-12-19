import React from 'react'
import Home from './Home'
import Practice from './Practice'
import Test from './Test'
import Challenge from './Challenge'
import Contact from './Contact'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/practice' component={Practice} />
          <Route path='/test' component={Test} />
          <Route path='/challenge' component={Challenge} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    )
  }
}
