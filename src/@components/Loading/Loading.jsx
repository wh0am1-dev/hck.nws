import React from 'react'
import { CircularProgress, Container } from '@material-ui/core'
import useStyles from './Loading.styles'

const Loading = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <section className={classes.center}>
        <CircularProgress />
      </section>
    </Container>
  )
}

export default Loading
