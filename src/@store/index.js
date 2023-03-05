import logger from 'redux-logger'
import { useSelector as useReduxSelector, shallowEqual } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import app from './app'
import stories from './stories'
import jobs from './jobs'

const config = {
  reducer: {
    app,
    stories,
    jobs
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
}

if (process.env.NODE_ENV !== 'production') {
  config.devTools = true
  config.middleware = getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger)
}

const store = configureStore(config)
export default store

export const useSelector = selector => useReduxSelector(selector, shallowEqual)
