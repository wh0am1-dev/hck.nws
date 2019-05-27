import axios from 'axios'
import { createReducer, createAction } from 'redux-starter-kit'
import api from './api'

const stories = {
  max: 50,
  items: [],
  fetching: false
}

// ==== actions ====

const fetchStoriesPending = createAction('stories:pending')
const fetchStoriesDone = createAction('stories:done')
const fetchStoriesError = createAction('stories:error')

export const fetchStories = () => dispatch => {
  dispatch(fetchStoriesPending())
  axios.get(api.stories.top)
    .then(res => {
      let items = res.data.slice(0, stories.max)
      axios.all(items.map(id => axios.get(api.item(id))))
        .then(res => {
          dispatch(fetchStoriesDone(res.map(r => r.data).filter(item => item.type === 'story')))
        })
    })
    .catch(err => dispatch(fetchStoriesError(err)))
}

// ==== reducer ====

export default createReducer(stories, {
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
