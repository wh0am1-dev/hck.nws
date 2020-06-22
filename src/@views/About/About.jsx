import React from 'react'
import { Helmet } from 'react-helmet'
import { Avatar, Box, Container, Grid, Link, Typography } from '@material-ui/core'
import useStyles from './About.styles'
import logo from '@svg/h4x0r.nws.svg'

const About = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Helmet title='about' />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className={classes.logoBox}>
            <Avatar src={logo} className={classes.logo} />
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
