import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import { useSelector } from '@store'
import { selectStories, fetchStories } from '@store/stories'
import { Error } from '@views'
import { ItemList, Loading } from '@components'
import useStyles from './Stories.styles'

const Stories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const stories = useSelector(selectStories)

  useEffect(() => dispatch(fetchStories()), [dispatch])

  if (stories.fetching === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title='stories' />
      {stories.fetching ? <Loading /> : <ItemList items={stories.items} />}
    </Container>
  )
}

export default Stories
