import { createAction, createReducer } from '@reduxjs/toolkit'
import { getJobs } from './api'
import { addSnack } from './app'

const jobs = {
  items: [],
  fetching: false,
  error: false
}

// ==== selectors ====

export const selectJobs = state => state?.jobs

// ==== actions ====

const fetchJobsPending = createAction('jobs:pending')
const fetchJobsDone = createAction('jobs:done')
const fetchJobsError = createAction('jobs:error')

export const fetchJobs =
  (force = false) =>
  (dispatch, getState) => {
    const { jobs } = getState()

    if (force || !jobs.items.length) {
      window.scroll({ top: 0 })
      dispatch(fetchJobsPending())
      getJobs({
        done: jobs => dispatch(fetchJobsDone(jobs)),
        error: error => {
          dispatch(fetchJobsError())
          dispatch(addSnack({ error }))
        }
      })
    }
  }

// ==== reducer ====

export default createReducer(jobs, builder => {
  builder
    .addCase(fetchJobsPending, jobs => {
      jobs.fetching = true
      jobs.items = []
    })
    .addCase(fetchJobsDone, (jobs, { payload: items }) => {
      jobs.fetching = false
      jobs.items = items
    })
    .addCase(fetchJobsError, jobs => {
      jobs.fetching = 'error'
    })
})
