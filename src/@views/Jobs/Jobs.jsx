import React, { useEffect } from 'react'
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
    <Container maxWidth='md' classes={{ root: classes.container }}>
      <ItemList items={jobs} loading={fetching} />
    </Container>
  )
}

export default Jobs
