import { Helmet } from 'react-helmet-async'
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'
import { ErrorIcon } from '../@components/icons'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
    }
  },
  center: {
    textAlign: 'center',
    marginTop: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  icon: { fontSize: 120, marginBottom: 16 }
}))

const Error = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet>
        <title>error</title>
      </Helmet>
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
