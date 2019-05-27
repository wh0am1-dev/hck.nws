import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import {
  CircularProgress,
  Container,
  List
} from '@material-ui/core'

import { fetchStories } from '../store/stories'
import Item from '../components/Item'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 0)
    }
  },
  loading: {
    textAlign: 'center',
    marginTop: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const Stories = props => {
  const classes = useStyles()
  const [ show, setShow ] = useState(false)
  const { fetching, stories } = props
  useEffect(() => props.dispatch(fetchStories()), []) // eslint-disable-line
  useEffect(() => {
    setShow(false)
    if (stories && stories.length) setTimeout(() => setShow(true), 50)
  }, [stories])

  return <>
    <Container maxWidth='md' classes={{ root: classes.container }}>
      {fetching ? <div className={classes.loading}><CircularProgress /></div> : null}
      <List>
        {stories.map((item, i, list) => (
          <Item key={i} item={item} show={show} delay={2000 * Math.log10(i)} divider={i === list.length - 1} />
        ))}
      </List>
    </Container>
  </>
}

export default connect(store => ({
  fetching: store.stories.fetching,
  stories: JSON.parse(JSON.stringify(store.stories.items))
}))(Stories)
