import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'
import { ItemList } from '@components'
import { selectStories, selectStoriesFetching, fetchStories } from '@store/stories'
import useStyles from './Stories.styles'

const Stories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const stories = useSelector(selectStories)
  const fetching = useSelector(selectStoriesFetching)

  useEffect(() => dispatch(fetchStories()), []) // eslint-disable-line

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title='stories' />
      <ItemList items={stories} loading={fetching} />
    </Container>
  )
}

export default Stories
