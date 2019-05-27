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

export default api
