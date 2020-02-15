import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'
import { ItemList } from '@components'
import { selectJobs, selectJobsFetching, fetchJobs } from '@store/jobs'
import useStyles from './Jobs.styles'

const Jobs = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const jobs = useSelector(selectJobs)
  const fetching = useSelector(selectJobsFetching)

  useEffect(() => dispatch(fetchJobs()), []) // eslint-disable-line

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title='jobs' />
      <ItemList items={jobs} loading={fetching} />
    </Container>
  )
}

export default Jobs
