import axios from 'axios'
import { createReducer, createAction } from 'redux-starter-kit'
import api from './api'

const jobs = {
  items: [],
  fetching: false
}

// ==== actions ====

const fetchJobsPending = createAction('stories:pending')
const fetchJobsDone = createAction('stories:done')
const fetchJobsError = createAction('stories:error')

export const fetchJobs = () => dispatch => {
  dispatch(fetchJobsPending())
  axios.get(api.jobs)
    .then(res => {
      axios.all(res.data.map(id => axios.get(api.item(id))))
        .then(res => {
          dispatch(fetchJobsDone(res.map(r => r.data)))
        })
    })
    .catch(err => dispatch(fetchJobsError(err)))
}

// ==== reducer ====

export default createReducer(jobs, {
  [fetchJobsPending]: stories => {
    stories.fetching = true
    stories.items = []
  },
  [fetchJobsDone]: (stories, { payload: items }) => {
    stories.fetching = false
    stories.items = items
  },
  [fetchJobsError]: (stories, { payload: error }) => {
    stories.error = error.message
  }
})
