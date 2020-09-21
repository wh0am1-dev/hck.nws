import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '@material-ui/core'
import { useSelector } from '@store'
import { selectStories, fetchStories } from '@store/stories'
import { ItemList, Loading } from '@components'
import useStyles from './Stories.styles'

const Stories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const stories = useSelector(selectStories)

  useEffect(() => dispatch(fetchStories()), [dispatch])

  if (stories.fetching === 'error') return <Redirect to='/error' />
  if (stories.fetching) return <Loading />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title='stories' />
      <ItemList items={stories.items} />
    </Container>
  )
}

export default Stories
