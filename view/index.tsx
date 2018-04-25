import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

import store from './store'
import routes from './routes'

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-container'));

