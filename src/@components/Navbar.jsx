import { useMemo } from 'react'
import { useNavigate, useLocation, Link, Routes, Route } from 'react-router-dom'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import routes from '../@views/routes'
import { RefreshIcon, InfoIcon, StoriesIcon, JobsIcon } from './icons'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    overflow: 'hidden'
  },
  scroll: {
    maxHeight: 'calc(100vh - 56px - 56px)',
    '@media (min-width:0px) and (orientation: landscape)': {
      maxHeight: 'calc(100vh - 48px - 56px)'
    },
    '@media (min-width:600px)': {
      maxHeight: 'calc(100vh - 64px - 56px)'
    }
  },
  title: {
    fontWeight: 800,
    cursor: 'pointer'
  },
  tabs: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    boxShadow:
      '0px -7px 8px -4px rgba(0,0,0,0.2), 0px -12px 17px 2px rgba(0,0,0,0.14), 0px -5px 22px 4px rgba(0,0,0,0.12)'
  }
}))

const Navbar = ({ children }) => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()

  const title = useMemo(
    () =>
      location.pathname === routes.STORIES
        ? 'stories'
        : location.pathname.split('/').slice(-1),
    [location.pathname]
  )

  const reload = useMemo(
    () => (
      <IconButton color='inherit' onClick={() => window.location.reload()}>
        <RefreshIcon />
      </IconButton>
    ),
    []
  )

  return (
    <main className={classes.root}>
      <AppBar position='fixed' elevation={8} color='primary'>
        <Toolbar>
          <Typography
            noWrap
            variant='h5'
            component='div'
            color='secondary'
            classes={{ root: classes.title }}
            onClick={() => navigate(routes.STORIES)}
          >
            H4X0R.nws
          </Typography>

          {title && (
            <Typography variant='h5' noWrap color='secondary'>
              /{title}
            </Typography>
          )}

          <div className={classes.grow} />

          <Routes>
            <Route path={routes.STORIES} element={reload} />
            <Route path={routes.JOBS} element={reload} />
            <Route path={routes.ITEM} element={reload} />
          </Routes>

          <IconButton
            edge='end'
            color='inherit'
            onClick={() => navigate(routes.ABOUT)}
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <section className={classes.content}>
        <div className={classes.toolbar} />
        <SimpleBar className={classes.scroll}>{children}</SimpleBar>
      </section>

      <BottomNavigation
        value={location.pathname}
        onChange={(ev, section) => navigate(section)}
        className={classes.tabs}
      >
        <BottomNavigationAction
          label='stories'
          value={routes.STORIES}
          icon={<StoriesIcon />}
        />
        <BottomNavigationAction
          label='jobs'
          value={routes.JOBS}
          icon={<JobsIcon />}
        />
      </BottomNavigation>
    </main>
  )
}

export default Navbar
