import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: 'center',
    marginTop: theme.spacing(20),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  list: {
    paddingBottom: 64
  }
}))

export default useStyles
