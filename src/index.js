import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-ibm-plex-mono'
import 'typeface-roboto'

import './index.css'
import theme from './themes/material'
import store from './store'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Stories from './views/Stories'
import Jobs from './views/Jobs'
import About from './views/About'
import NotFound from './views/NotFound'
import * as serviceWorker from './serviceWorker'

const H4x0rNws = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename='/H4X0R.nws'>
          <Route component={Navbar} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/stories' component={Stories} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<H4x0rNws />, document.querySelector('#l33t'))
serviceWorker.register()
