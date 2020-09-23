import axios from 'axios'

const url = 'https://hacker-news.firebaseio.com/v0'
const api = {
  stories: {
    top: `${url}/topstories.json`,
    new: `${url}/newstories.json`,
    best: `${url}/beststories.json`
  },
  jobs: `${url}/jobstories.json`,
  show: `${url}/showstories.json`,
  ask: `${url}/askstories.json`,
  item: id => `${url}/item/${id}.json`,
  og: 'https://ogaas.vercel.app/api/og'
}

// === === === === === === === ===

export const getStories = ({ max, done, error }) =>
  axios
    .get(api.stories.top)
    .then(res =>
      axios
        .all(res.data.slice(0, max).map(id => axios.get(api.item(id))))
        .then(res => done(res.map(r => r.data).filter(item => item.type === 'story')))
        .catch(err => error && error(err))
    )
    .catch(err => error && error(err))

// === === === === === === === ===

export const getJobs = ({ done, error }) =>
  axios
    .get(api.jobs)
    .then(res =>
      axios
        .all(res.data.map(id => axios.get(api.item(id))))
        .then(res => done(res.map(r => r.data)))
        .catch(err => error && error(err))
    )
    .catch(err => error && error(err))

// === === === === === === === ===

export const getItem = ({ id, done, error }) =>
  axios
    .get(api.item(id))
    .then(res =>
      axios
        .all(res.data.kids?.map(comment => axios.get(api.item(comment))) || [])
        .then(comments => done({ ...res.data, kids: comments.map(c => c.data) }))
        .catch(err => error && error(err))
    )
    .catch(err => error && error(err))

// === === === === === === === ===

export const getOG = ({ url, done, error }) =>
  axios
    .post(api.og, { url })
    .then(res => done(res.data))
    .catch(err => error && error(err))
