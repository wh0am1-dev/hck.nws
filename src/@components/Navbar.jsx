import { useMemo } from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'
import routes from '../@views/routes'
import { RefreshIcon, InfoIcon, StoriesIcon, JobsIcon } from './icons'

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    borderBottom: `2px solid ${theme.palette.primary.main}`
  },
  title: {
    fontWeight: 800,
    cursor: 'pointer',
    color: theme.palette.text.primary
  },
  path: {
    color: theme.palette.text.primary
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    color: theme.palette.text.primary
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    overflow: 'hidden'
  },
  toolbar: theme.mixins.toolbar,
  scroll: {
    maxHeight: 'calc(100vh - 56px - 56px)',
    '@media (min-width:0px) and (orientation: landscape)': {
      maxHeight: 'calc(100vh - 48px - 56px)'
    },
    '@media (min-width:600px)': {
      maxHeight: 'calc(100vh - 64px - 56px)'
    }
  },
  tabs: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.background.default,
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
      <IconButton
        className={classes.icon}
        onClick={() => window.location.reload()}
      >
        <RefreshIcon />
      </IconButton>
    ),
    []
  )

  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        elevation={8}
        className={classes.appbar}
      >
        <Toolbar>
          <Typography
            noWrap
            variant='h5'
            component='div'
            className={classes.title}
            onClick={() => navigate(routes.STORIES)}
          >
            hck.nws
          </Typography>

          {title && (
            <Typography variant='h5' noWrap className={classes.path}>
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
            onClick={() => navigate(routes.ABOUT)}
            className={classes.icon}
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <section className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <div className={classes.toolbar} />
      </section>

      <BottomNavigation
        value={location.pathname}
        onChange={(_, section) => navigate(section)}
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
    </>
  )
}

export default Navbar
