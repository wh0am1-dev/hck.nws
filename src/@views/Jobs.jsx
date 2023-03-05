import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { makeStyles, Container } from '@material-ui/core'
import { useSelector } from '../@store'
import { selectJobs, fetchJobs } from '../@store/jobs'
import Error from '../@views/Error'
import ItemList from '../@components/ItemList'
import JobsSvg from 'jsx:../@svg/jobs.svg'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 0)
    }
  },
  hero: {
    height: '30vh',
    maxWidth: '100%',
    margin: theme.spacing(2, 0)
  }
}))

const Jobs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { fetching, items } = useSelector(selectJobs)

  useEffect(() => dispatch(fetchJobs()), [dispatch])

  if (fetching === 'error') return <Error />

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Helmet>
        <title>jobs</title>
      </Helmet>
      <JobsSvg className={classes.hero} />
      <ItemList fetching={fetching} items={items} />
    </Container>
  )
}

export default Jobs
