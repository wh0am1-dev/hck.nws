import { makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: 'center',
    marginTop: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <section className={classes.center}>
      <CircularProgress />
    </section>
  )
}

export default Loading
