import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { SectionCard } from '@components'
import { StoriesIcon, JobsIcon } from '@components/icons'
import useStyles from './Home.styles'

const Home = props => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' classes={{ root: classes.container }}>
      <Grid
        container
        spacing={4}
        alignItems='center'
        justify='center'
        classes={{ root: classes.grid }}
      >
        <Hidden xsDown>
          <Grid item xs={12} container spacing={4} alignItems='center' justify='center'>
            <Grid item>
              <img src='/img/h4x0r.nws.svg' className={classes.logo} alt='' />
            </Grid>
            <Grid item>
              <Typography variant='h1' classes={{ root: classes.title }}>
                H4X0R.nws
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={6}>
          <SectionCard
            title='stories'
            img='/img/illustrations/stories.svg'
            icon={<StoriesIcon />}
            onClick={() => props.history.push('/stories')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SectionCard
            title='jobs'
            img='/img/illustrations/jobs.svg'
            icon={<JobsIcon />}
            onClick={() => props.history.push('/jobs')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
