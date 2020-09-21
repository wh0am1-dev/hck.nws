import React, { useState, useMemo } from 'react'
import clsx from 'clsx'
import { Route, useHistory, useLocation } from 'react-router-dom'
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { routes } from '@app'
import { Tabs } from '@components'
import { MenuIcon, RefreshIcon } from '@components/icons'
import DrawerContent from './DrawerContent'
import useStyles from './Navbar.styles'

const Navbar = ({ children }) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles({ tabs: [routes.STORIES, routes.JOBS].includes(location.pathname) })
  const [showDrawer, toggleDrawer] = useState(false)

  const title = useMemo(
    () =>
      location.pathname === routes.STORIES ? 'stories' : location.pathname.split('/').slice(-1),
    [location]
  )

  return (
    <main className={classes.root}>
      <AppBar position='fixed' elevation={8} color='primary' className={classes.front}>
        <Toolbar>
          <Hidden smUp implementation='css'>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => toggleDrawer(!showDrawer)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant='h5' noWrap color='secondary' classes={{ root: classes.title }}>
            H4X0R.nws{title && ` · ${title}`}
          </Typography>
          <Route
            path={['/', '/jobs']}
            exact
            render={props => (
              <IconButton
                edge='end'
                color='inherit'
                onClick={() => window.location.reload()}
                {...props}
              >
                <RefreshIcon />
              </IconButton>
            )}
          />
        </Toolbar>
      </AppBar>

      <section className={clsx(classes.drawer, classes.back)}>
        <Hidden smUp implementation='css'>
          <SwipeableDrawer
            open={showDrawer}
            onOpen={() => toggleDrawer(true)}
            onClose={() => toggleDrawer(false)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent
              classes={classes}
              history={history}
              location={location}
              toggleDrawer={toggleDrawer}
            />
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{ paper: classes.drawerPaper, root: classes.back }}
            variant='permanent'
            open
          >
            <DrawerContent
              classes={classes}
              history={history}
              location={location}
              toggleDrawer={toggleDrawer}
            />
          </Drawer>
        </Hidden>
      </section>

      <section className={classes.content}>
        <div className={classes.toolbar} />
        <SimpleBar className={classes.scroll}>{children}</SimpleBar>
      </section>

      <Route path={['/', '/jobs']} exact component={Tabs} />
    </main>
  )
}

export default Navbar
