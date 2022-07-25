import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { makeStyles, Container } from '@material-ui/core'
import { useSelector } from '../@store'
import { selectStories, fetchStories } from '../@store/stories'
import Error from '../@views/Error'
import ItemList from '../@components/ItemList'
import Loading from '../@components/Loading'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
    }
  }
}))

const Stories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const stories = useSelector(selectStories)

  useEffect(() => dispatch(fetchStories()), [dispatch])

  if (stories.fetching === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet>
        <title>stories</title>
      </Helmet>
      {stories.fetching ? <Loading /> : <ItemList items={stories.items} />}
    </Container>
  )
}

export default Stories
