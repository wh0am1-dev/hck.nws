import { createAction, createReducer } from '@reduxjs/toolkit'
import { getJobs } from './api'

const jobs = {
  items: [],
  fetching: false
}

// ==== selectors ====

export const selectJobs = state => state.jobs.items ?? []
export const selectJobsFetching = state => state.jobs.fetching ?? false

// ==== actions ====

const fetchJobsPending = createAction('stories:pending')
const fetchJobsDone = createAction('stories:done')
const fetchJobsError = createAction('stories:error')

export const fetchJobs = () => dispatch => {
  dispatch(fetchJobsPending())
  getJobs({
    done: jobs => dispatch(fetchJobsDone(jobs)),
    error: err => dispatch(fetchJobsError(err))
  })
}

// ==== reducer ====

export default createReducer(jobs, {
  [fetchJobsPending]: jobs => {
    jobs.fetching = true
    jobs.items = []
  },
  [fetchJobsDone]: (jobs, { payload: items }) => {
    jobs.fetching = false
    jobs.items = items
  },
  [fetchJobsError]: (jobs, { payload: error }) => {
    jobs.error = error.message
  }
})
