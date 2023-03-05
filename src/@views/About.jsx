import { Helmet } from 'react-helmet-async'
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Link
} from '@material-ui/core'
import LogoSvg from 'jsx:../@svg/logo.svg'
import { version } from '../../package.json'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2)
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'float 7s linear infinite'
  },
  logo: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginTop: theme.spacing(2),
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    borderRadius: '100%',
    boxShadow: theme.shadows[12],
    animation: 'swing 13s linear infinite'
  },
  title: {
    fontWeight: 800
  },
  toolbar: theme.mixins.toolbar,
  version: {
    fontWeight: 600
  }
}))

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
            hck.nws
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' align='center' gutterBottom>
            hacker news pwa
          </Typography>
          <Typography align='center'>
            <Link
              href='https://github.com/wh0am1-dev/hck.nws'
              target='_blank'
              underline='none'
            >
              <Chip
                clickable
                size='small'
                color='primary'
                variant='outlined'
                label={`v${version}`}
                className={classes.version}
              />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
