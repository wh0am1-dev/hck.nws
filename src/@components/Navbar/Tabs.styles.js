import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    boxShadow:
      '0px -7px 8px -4px rgba(0,0,0,0.2), 0px -12px 17px 2px rgba(0,0,0,0.14), 0px -5px 22px 4px rgba(0,0,0,0.12)',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.size.drawer / 2
    },
    [theme.breakpoints.down('xs')]: {
      zIndex: theme.zIndex.snackbar
    }
  }
}))

export default useStyles
