import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6, 4)
    }
  },
  title: {
    fontWeight: 800
  }
}))

export default useStyles
