import { createAction, createReducer } from '@reduxjs/toolkit'
import { getStories } from './api'

const stories = {
  max: 50,
  items: [],
  fetching: false
}

// ==== selectors ====

export const selectStories = state => state.stories.items ?? []
export const selectStoriesFetching = state => state.stories.fetching ?? false

// ==== actions ====

export const maxStories = createAction('stories:max')

const fetchStoriesPending = createAction('stories:pending')
const fetchStoriesDone = createAction('stories:done')
const fetchStoriesError = createAction('stories:error')

export const fetchStories = () => dispatch => {
  dispatch(fetchStoriesPending())
  getStories({
    max: stories.max,
    done: stories => dispatch(fetchStoriesDone(stories)),
    error: error => dispatch(fetchStoriesError(error))
  })
}

// ==== reducer ====

export default createReducer(stories, {
  [maxStories]: (stories, { payload: max }) => {
    stories.max = max
  },
  [fetchStoriesPending]: stories => {
    stories.fetching = true
    stories.items = []
  },
  [fetchStoriesDone]: (stories, { payload: items }) => {
    stories.fetching = false
    stories.items = items
  },
  [fetchStoriesError]: (stories, { payload: error }) => {
    stories.error = error.message
  }
})
