import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import store from './@store'
import theme from './@themes/dark'
import Navbar from './@components/Navbar'
import Snacks from './@components/Snacks'
import routes from './@views/routes'
import Item from './@views/Item'
import Stories from './@views/Stories'
import Jobs from './@views/Jobs'
import About from './@views/About'
import Error from './@views/Error'
import NotFound from './@views/NotFound'
import 'simplebar/dist/simplebar.min.css'
import 'typeface-nunito'
import './styles.css'

createRoot(document.querySelector('#l33t')).render(
  <HelmetProvider>
    <Provider store={store}>
      <Helmet defaultTitle='hck.nws' titleTemplate='hck.nws · %s' />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Snacks />
        <BrowserRouter basename={routes.BASENAME}>
          <Navbar>
            <Routes>
              <Route path={routes.STORIES} element={<Stories />} />
              <Route path={routes.JOBS} element={<Jobs />} />
              <Route path={routes.ITEM} element={<Item />} />
              <Route path={routes.ABOUT} element={<About />} />
              <Route path={routes.ERROR} element={<Error />} />
              <Route path={routes.NOT_FOUND} element={<NotFound />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </HelmetProvider>
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(new URL('sw.js', import.meta.url), {
    scope: '.',
    type: 'module'
  })
}
