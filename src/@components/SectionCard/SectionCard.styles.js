import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: 'transparent',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    })
  },
  title: {
    fontWeight: 600
  },
  icon: {
    margin: theme.spacing(0, 2)
  },
  cardHover: {
    transform: 'translate(0, -8px)'
  },
  cardMedia: {
    backgroundColor: 'transparent',
    height: theme.spacing(30),
    padding: theme.spacing(2),
    objectFit: 'fill',
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing(40)
    }
  },
  cardTitle: {
    backgroundColor: theme.palette.background.paper
  }
}))

export default useStyles
