import React from 'react'
import { CircularProgress } from '@material-ui/core'
import useStyles from './Loading.styles'

const Loading = () => {
  const classes = useStyles()

  return (
    <section className={classes.center}>
      <CircularProgress />
    </section>
  )
}

export default Loading
