import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { ErrorIcon } from '@components/icons'
import useStyles from './Error.styles'

const Error = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <section className={classes.center}>
        <Grid container spacing={0} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <ErrorIcon className={classes.icon} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5'>
              oops...{' '}
              <span role='img' aria-label='oops'>
                😖
              </span>
              <br />
              something went wrong
            </Typography>
          </Grid>
        </Grid>
      </section>
    </Container>
  )
}

export default Error
