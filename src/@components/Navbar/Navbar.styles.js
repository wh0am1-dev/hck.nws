import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  back: { zIndex: theme.zIndex.appbar },
  front: { zIndex: theme.zIndex.snackbar },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.size.drawer,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: theme.size.drawer,
    backgroundColor: theme.palette.background.paper
  },
  toolbar: theme.mixins.toolbar,
  content: {
    position: 'relative',
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontWeight: 600
  },
  logoButton: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    width: theme.spacing(16),
    height: theme.spacing(16),
    borderRadius: '100%'
  },
  logo: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    borderRadius: '100%',
    boxShadow: theme.shadows[8],
    border: '1px solid #111'
  },
  footer: {
    margin: theme.spacing(3, 0)
  },
  version: {
    fontWeight: 600,
    marginTop: theme.spacing(2)
  }
}))

export default useStyles
