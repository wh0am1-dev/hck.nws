import { createAction, createReducer } from '@reduxjs/toolkit'
import { getStories } from './api'
import { addSnack } from './app'

const stories = {
  max: 64,
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

export const fetchStories =
  (force = false) =>
  (dispatch, getState) => {
    const { stories } = getState()

    if (force || !stories.items.length) {
      window.scroll({ top: 0 })
      dispatch(fetchStoriesPending())
      getStories({
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

export default createReducer(stories, builder => {
  builder
    .addCase(maxStories, (stories, { payload: max }) => {
      stories.max = max
    })
    .addCase(fetchStoriesPending, stories => {
      stories.fetching = true
      stories.items = []
    })
    .addCase(fetchStoriesDone, (stories, { payload: items }) => {
      stories.fetching = false
      stories.items = items
    })
    .addCase(fetchStoriesError, stories => {
      stories.fetching = 'error'
    })
})
