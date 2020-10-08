import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, Link, Typography } from '@material-ui/core'
import useStyles from './About.styles'
import { LogoSvg } from '@svg'

const About = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Helmet>
        <title>about</title>
      </Helmet>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className={classes.logoBox}>
            <LogoSvg className={classes.logo} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' className={classes.title}>
            H4X0R.nws
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' align='center' gutterBottom>
            hacker news client pwa
          </Typography>
          <Typography variant='body2' align='center'>
            <Link href='https://github.com/Neko250/H4X0R.nws' target='_blank'>
              github.com/neko250/H4X0R.nws
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
