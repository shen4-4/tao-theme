import * as React from 'react'
import { Route, Redirect } from 'react-router'
import { App } from './container/index'
import { List } from './pages/auth/list'

const routes = (
  <div>
    <Route component={App} />
    <Route exact path='/' render={() => <Redirect to="/index" />} />
    <Route path='/index' component={List} />
  </div>
)

export default routes
