import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 0)
    }
  }
}))

export default useStyles
