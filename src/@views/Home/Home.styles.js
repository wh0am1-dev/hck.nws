import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px)'
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto'
    }
  },
  grid: {
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100vh - 56px)'
    }
  },
  logo: {
    maxWidth: theme.spacing(10),
    maxHeight: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.spacing(12),
      maxHeight: theme.spacing(12)
    }
  },
  title: {
    fontWeight: 600
  }
}))

export default useStyles
