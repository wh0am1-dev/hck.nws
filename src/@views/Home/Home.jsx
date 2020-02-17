import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { SectionCard } from '@components'
import { StoriesIcon, JobsIcon } from '@components/icons'
import useStyles from './Home.styles'
import logo from '@svg/h4x0r.nws.svg'
import storiesSplash from '@svg/stories.svg'
import jobsSplash from '@svg/jobs.svg'

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
        <Hidden smDown>
          <Grid item xs={12} container spacing={4} alignItems='center' justify='center'>
            <Grid item>
              <img src={logo} className={classes.logo} alt='' />
            </Grid>
            <Grid item>
              <Typography variant='h2' classes={{ root: classes.title }}>
                H4X0R.nws
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={6}>
          <SectionCard
            title='stories'
            img={storiesSplash}
            icon={<StoriesIcon />}
            onClick={() => props.history.push('/stories')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <SectionCard
            title='jobs'
            img={jobsSplash}
            icon={<JobsIcon />}
            onClick={() => props.history.push('/jobs')}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
