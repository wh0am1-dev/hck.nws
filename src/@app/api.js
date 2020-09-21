import axios from 'axios'

const base = 'https://hacker-news.firebaseio.com/v0/'
const item = 'https://hacker-news.firebaseio.com/v0/item/'

const api = {
  stories: {
    top: base + 'topstories.json',
    new: base + 'newstories.json',
    best: base + 'beststories.json'
  },
  jobs: base + 'jobstories.json',
  show: base + 'showstories.json',
  ask: base + 'askstories.json',
  item: id => item + id + '.json'
}

// === === === === === === === ===

export const getStories = ({ max, done, error }) =>
  axios
    .get(api.stories.top)
    .then(res => {
      axios
        .all(res.data.slice(0, max).map(id => axios.get(api.item(id))))
        .then(res => done(res.map(r => r.data).filter(item => item.type === 'story')))
        .catch(error)
    })
    .catch(error)

// === === === === === === === ===

export const getJobs = ({ done, error }) =>
  axios
    .get(api.jobs)
    .then(res => {
      axios
        .all(res.data.map(id => axios.get(api.item(id))))
        .then(res => done(res.map(r => r.data)))
        .catch(error)
    })
    .catch(error)

// === === === === === === === ===

export const getItem = ({ id, done, error }) =>
  axios
    .get(api.item(id))
    .then(res =>
      axios
        .all(res.data.kids.map(comment => axios.get(api.item(comment))))
        .then(comments => done({ ...res.data, kids: comments.map(c => c.data) }))
        .catch(error)
    )
    .catch(error)
