import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import INDEX from './views/index'
import FORGOTPASSWORD from './views/forgotpassword'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={INDEX} exact path="/" />
        <Route component={FORGOTPASSWORD} exact path="/forgotpassword" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
