import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import 'typeface-roboto'

import theme from '@themes/dark'
import store from '@store'
import { Navbar, Tabs } from '@components'
import { Home, Stories, Jobs, About, NotFound } from '@views'
import './index.css'

export const asset = (path = '') => process.env.REACT_APP_BASENAME + path

const H4x0rNws = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={asset()}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
        <Route path={['/stories', '/jobs']} component={Tabs} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default H4x0rNws
