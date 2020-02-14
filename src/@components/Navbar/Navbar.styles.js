import { makeStyles } from '@material-ui/core'

const DRAWER_WIDTH = 240
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontWeight: 600
  },
  drawer: {
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.background.paper
  },
  logo: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    width: theme.spacing(16),
    height: theme.spacing(16),
    borderRadius: '100%',
    boxShadow: theme.shadows[8],
    border: '1px solid #111'
  },
  footer: {
    margin: theme.spacing(3, 0)
  },
  toolbar: theme.mixins.toolbar
}))

export default useStyles
