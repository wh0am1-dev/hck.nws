import _ from 'lodash-es'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { getStories } from './api'
import { addSnack } from './app'

const stories = {
  max: 50,
  items: [],
  fetching: false
}

// ==== selectors ====

export const selectStories = state => _.get(state, 'stories.items') ?? []
export const selectStoriesFetching = state => _.get(state, 'stories.fetching') ?? false

// ==== actions ====

export const maxStories = createAction('stories:max')

const fetchStoriesPending = createAction('stories:pending')
const fetchStoriesDone = createAction('stories:done')

export const fetchStories = (force = false) => (dispatch, getState) => {
  const { stories } = getState()

  if (force || !stories.items.length) {
    dispatch(fetchStoriesPending())
    getStories({
      max: stories.max,
      done: stories => dispatch(fetchStoriesDone(stories)),
      error: error =>
        dispatch(addSnack({ message: `${error.name}: ${error.message}`, variant: 'error' }))
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
  }
})
