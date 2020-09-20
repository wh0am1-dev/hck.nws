import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  item: {
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    })
  },
  hover: {
    boxShadow: theme.shadows[6],
    transform: 'translate(0, -4px)'
  },
  title: {
    fontWeight: 600
  }
}))

export default useStyles
