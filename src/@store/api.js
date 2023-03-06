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

export const getStories = ({ max = 64, done, error }) =>
  axios
    .get(api.stories.top)
    .then(top =>
      axios
        .all(top.data.slice(0, max).map(id => axios.get(api.item(id))))
        .then(stories =>
          done?.(
            stories
              .map(story => story.data)
              .filter(story => story.type === 'story')
          )
        )
        .catch(e => error?.(e))
    )
    .catch(e => error?.(e))

export const getJobs = ({ done, error }) =>
  axios
    .get(api.jobs)
    .then(jobs =>
      axios
        .all(jobs.data.map(id => axios.get(api.item(id))))
        .then(jobs => done?.(jobs.map(job => job.data)))
        .catch(e => error?.(e))
    )
    .catch(e => error?.(e))

export const getItem = ({ id, done, error }) =>
  axios
    .get(api.item(id))
    .then(item =>
      axios
        .all(item.data.kids?.map(comment => axios.get(api.item(comment))) || [])
        .then(comments =>
          done?.({
            ...item.data,
            kids: comments.map(c => c.data).filter(c => c && !c.deleted)
          })
        )
        .catch(e => error?.(e))
    )
    .catch(e => error?.(e))

export const getOG = ({ url, done, error }) =>
  axios
    .get(`${api.og}?url=${encodeURIComponent(url)}`)
    .then(og => done?.(og.data))
    .catch(e => error?.(e))
