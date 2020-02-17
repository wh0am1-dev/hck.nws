import _ from 'lodash-es'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { getJobs } from './api'

const jobs = {
  items: [],
  fetching: false
}

// ==== selectors ====

export const selectJobs = state => _.get(state, 'jobs.items') ?? []
export const selectJobsFetching = state => _.get(state, 'jobs.fetching') ?? false

// ==== actions ====

const fetchJobsPending = createAction('jobs:pending')
const fetchJobsDone = createAction('jobs:done')
const fetchJobsError = createAction('jobs:error')

export const fetchJobs = (force = false) => (dispatch, getState) => {
  const { jobs } = getState()

  if (force || !jobs.items.length) {
    dispatch(fetchJobsPending())
    getJobs({
      done: jobs => dispatch(fetchJobsDone(jobs)),
      error: error => dispatch(fetchJobsError(`${error.name}: ${error.message}`))
    })
  }
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
    jobs.error = error
  }
})
