import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { makeStyles, Container } from '@material-ui/core'
import { useSelector } from '../@store'
import { selectJobs, fetchJobs } from '../@store/jobs'
import Error from '../@views/Error'
import ItemList from '../@components/ItemList'
import Loading from '../@components/Loading'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 0)
    }
  }
}))

const Jobs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const jobs = useSelector(selectJobs)

  useEffect(() => dispatch(fetchJobs()), [dispatch])

  if (jobs.fetching === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet>
        <title>jobs</title>
      </Helmet>
      {jobs.fetching ? <Loading /> : <ItemList items={jobs.items} />}
    </Container>
  )
}

export default Jobs
