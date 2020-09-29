import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 800
  },
  dot: {
    margin: theme.spacing(2, 0)
  },
  content: {
    overflowX: 'hidden'
  },
  more: {
    textAlign: 'center'
  }
}))

export default useStyles
