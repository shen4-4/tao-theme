import * as React from 'react'
import { Route, Redirect } from 'react-router'
import { App } from './container/index'
import { List } from './pages/list'
import { About } from './pages/about'
import { Archive } from './pages/archive'

const routes = (
  <App>
    <Route exact path='/' render={() => <Redirect to="/index" />} />
    <Route path='/index' component={List} />
    <Route path='/archive' component={Archive} />
    <Route path='/about' component={About} />
  </App>
)

export default routes