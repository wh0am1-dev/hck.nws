import { makeStyles } from '@material-ui/core'

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

export default useStyles
