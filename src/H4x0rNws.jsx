import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import 'typeface-roboto'

import theme from '@themes/dark'
import store from '@store'
import { Navbar } from '@components'
import { Home, Stories, Jobs, About, NotFound } from '@views'
import './index.css'

export const asset = (path = '') => process.env.REACT_APP_BASENAME + path
export { version } from '../package.json'

const H4x0rNws = () => (
  <Provider store={store}>
    <Helmet defaultTitle='H4X0R.nws' titleTemplate='H4X0R.nws · %s' />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={asset()}>
        <Navbar>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/stories' component={Stories} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default H4x0rNws
