import { createAction, createReducer } from '@reduxjs/toolkit'
import { api } from '@app'
import { addSnack } from './app'

const stories = {
  max: 50,
  items: [],
  fetching: false,
  error: false
}

// ==== selectors ====

export const selectStories = state => state?.stories

// ==== actions ====

export const maxStories = createAction('stories:max')

const fetchStoriesPending = createAction('stories:pending')
const fetchStoriesDone = createAction('stories:done')
const fetchStoriesError = createAction('stories:error')

export const fetchStories = (force = false) => (dispatch, getState) => {
  const { stories } = getState()

  if (force || !stories.items.length) {
    dispatch(fetchStoriesPending())
    api.getStories({
      max: stories.max,
      done: stories => dispatch(fetchStoriesDone(stories)),
      error: error => {
        dispatch(fetchStoriesError())
        dispatch(addSnack({ error }))
      }
    })
  }
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
  [fetchStoriesError]: stories => {
    stories.fetching = 'error'
  }
})
