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
    <Helmet defaultTitle='H4X0R.nws' titleTemplate='H4X0R.nws · %s'>
      <meta property='og:title' content='H4X0R.nws' />
      <meta property='og:description' content='hacker news prog web app' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://wh0am1.dev/H4X0R.nws' />
      <meta
        property='og:image'
        content='https://raw.githubusercontent.com/Neko250/H4X0R.nws/master/public/img/h4x0r.nws.512.png'
      />
    </Helmet>
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
