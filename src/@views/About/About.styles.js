import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2)
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
    boxShadow: theme.shadows[12],
    animation: 'swing 13s linear infinite'
  },
  title: {
    fontWeight: 600
  },
  toolbar: theme.mixins.toolbar
}))

export default useStyles
