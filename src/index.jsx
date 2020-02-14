import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import 'typeface-ibm-plex-mono'
import 'typeface-roboto'

import theme from '@themes/dark'
import store from '@store'
import { Navbar, Tabs } from '@components'
import { Home, Stories, Jobs, About, NotFound } from '@views'
import * as serviceWorker from 'serviceWorker'
import './index.css'

const H4x0rNws = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename='/H4X0R.nws'>
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
}

ReactDOM.render(<H4x0rNws />, document.querySelector('#l33t'))
serviceWorker.register()
