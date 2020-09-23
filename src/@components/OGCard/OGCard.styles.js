import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    })
  },
  cardHover: {
    transform: 'translate(0, -8px)'
  }
}))

export default useStyles
