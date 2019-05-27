import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core'

import {
  StoriesIcon,
  JobsIcon
} from '../components/icons'

// ==== css styles ====

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    padding: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(3, 0)
  },
  logo: {
    maxWidth: theme.spacing(10),
    maxHeight: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.spacing(12),
      maxHeight: theme.spacing(12)
    }
  },
  card: {
    backgroundColor: 'transparent',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    })
  },
  cardHover: {
    transform: 'translate(0, -8px)'
  },
  cardMedia: {
    backgroundColor: 'transparent',
    height: theme.spacing(39),
    padding: theme.spacing(2),
    objectFit: 'fill',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.grey[700]
    }
  },
  cardTitle: {
    backgroundColor: theme.palette.background.paper
  }
}))

// ==== Home view ====

const Home = props => {
  const classes = useStyles()

  return <>
    <Container maxWidth='md' classes={{ root: classes.container }}>
      <Grid container spacing={4} alignItems='center' justify='center'>

        <Hidden xsDown>
          <Grid item xs={12}
            container spacing={4} alignItems='center' justify='center'
            classes={{ container: classes.title }}>
            <Grid item><img src='img/h4x0r.nws.svg' className={classes.logo} alt='' /></Grid>
            <Grid item>
              <Typography variant='h1' style={{ fontWeight: 600 }}>
                H4X0R.nws
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={6}>
          <SectionCard
            title='/stories'
            img='img/illustrations/stories.svg'
            icon={<StoriesIcon />}
            onClick={() => props.history.push('/stories')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SectionCard
            title='/jobs'
            img='img/illustrations/jobs.svg'
            icon={<JobsIcon />}
            onClick={() => props.history.push('/jobs')}
          />
        </Grid>

      </Grid>
    </Container>
  </>

  function SectionCard ({ title, img, icon, onClick }) {
    const [ elevate, setElevate ] = useState(false)

    return <>
      <Card
        onMouseEnter={() => setElevate(true)}
        onMouseLeave={() => setElevate(false)}
        onTouchStart={() => setElevate(true)}
        onTouchEnd={() => setElevate(false)}
        elevation={elevate ? 3 : 0}
        className={clsx(classes.card, elevate && classes.cardHover)}
      >
        <CardActionArea onClick={onClick}>
          <CardMedia
            className={classes.cardMedia}
            component='img'
            src={img}
            title=''
          />
          <CardContent className={classes.cardTitle}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item style={{ margin: '0 0.5em 0 0.5em' }}>{icon}</Grid>
              <Grid item>
                <Typography variant='h5' style={{ fontWeight: 600 }}>
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  }
}

export default Home
