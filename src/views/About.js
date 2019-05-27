import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  logoBox: {
    animation: 'float 7s linear infinite'
  },
  logo: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginTop: theme.spacing(2),
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    animation: 'swing 13s linear infinite'
  },
  toolbar: theme.mixins.toolbar
}))

const About = props => {
  const classes = useStyles()

  return <>
    <Container maxWidth='sm' className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box className={classes.logoBox}>
            <Avatar src='img/h4x0r.nws.svg' className={classes.logo} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' style={{ fontWeight: 600 }}>
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
  </>
}

export default About
