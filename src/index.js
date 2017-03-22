import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Layout from './components/Layout'
import PieContainer from './containers/PieContainer'
import PiesContainer from './containers/PiesContainer'
import './styles/index.css'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={PiesContainer} />
      <Route path="/pies" component={PiesContainer} />
      <Route path="/pies/:id" component={PieContainer} />
    </Route>
  </Router>
), document.getElementById('main'))
