import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import stories from './stories'
import jobs from './jobs'

const config = {
  reducer: {
    stories,
    jobs
  },
  middleware: [...getDefaultMiddleware()]
}

if (process.env.NODE_ENV !== 'production') {
  config.middleware.push(logger)
}

const store = configureStore(config)
export default store
