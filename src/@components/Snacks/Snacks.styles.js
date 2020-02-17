import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8)
    }
  },
  info: {
    color: theme.palette.text.primary
  },
  error: {
    color: theme.palette.text.primary
  }
}))

export default useStyles
