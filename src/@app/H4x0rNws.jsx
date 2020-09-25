import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import 'simplebar/dist/simplebar.min.css'
import 'typeface-nunito'

import { routes } from '@app'
import theme from '@themes/dark'
import store from '@store'
import { Navbar, Snacks } from '@components'
import { Item, Stories, Jobs, About, Error, NotFound } from '@views'
import './index.css'

const H4x0rNws = () => (
  <Provider store={store}>
    <Helmet defaultTitle='H4X0R.nws' titleTemplate='H4X0R.nws · %s' />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Snacks />
      <BrowserRouter basename={routes.BASENAME}>
        <Navbar>
          <Switch>
            <Route path={routes.STORIES} exact component={Stories} />
            <Route path={routes.JOBS} component={Jobs} />
            <Route path={routes.ITEM} component={Item} />
            <Route path={routes.ABOUT} component={About} />
            <Route path={routes.ERROR} component={Error} />
            <Route component={NotFound} />
          </Switch>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default H4x0rNws
