import React from 'react'
import { Avatar, Box, Container, Grid, Link, Typography } from '@material-ui/core'
import { asset } from 'H4x0rNws'
import useStyles from './About.styles'

const About = props => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className={classes.logoBox}>
            <Avatar src={asset('/img/h4x0r.nws.svg')} className={classes.logo} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' classes={{ root: classes.title }}>
            H4X0R.nws
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>
            hacker news client pwa
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' align='center'>
            <Link href='https://github.com/Neko250/H4X0R.nws' target='_blank'>
              https://github.com/neko250/H4X0R.nws
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
