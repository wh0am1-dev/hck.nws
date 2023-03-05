import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { makeStyles, Container } from '@material-ui/core'
import { useSelector } from '../@store'
import { selectStories, fetchStories } from '../@store/stories'
import Error from '../@views/Error'
import ItemList from '../@components/ItemList'
import Loading from '../@components/Loading'
import StoriesSvg from 'jsx:../@svg/stories.svg'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
    }
  },
  hero: {
    height: '30vh',
    maxWidth: '100%',
    margin: theme.spacing(2, 0)
  }
}))

const Stories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const stories = useSelector(selectStories)

  useEffect(() => dispatch(fetchStories()), [dispatch])

  if (stories.fetching === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={classes.container}>
      <Helmet>
        <title>stories</title>
      </Helmet>
      <StoriesSvg className={classes.hero} />
      {stories.fetching ? <Loading /> : <ItemList items={stories.items} />}
    </Container>
  )
}

export default Stories
