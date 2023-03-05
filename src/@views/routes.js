export default {
  BASENAME: process.env.NODE_ENV !== 'production' ? '/' : '/hck.nws',
  STORIES: '/',
  JOBS: '/jobs',
  ITEM: '/item/:id',
  ABOUT: '/about',
  ERROR: '/error',
  NOT_FOUND: '*'
}
