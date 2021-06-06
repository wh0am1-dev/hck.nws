import React, { useState, useMemo } from 'react'
import clsx from 'clsx'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { AppBar, Drawer, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { routes } from '@app'
import { MenuIcon, RefreshIcon } from '@components/icons'
import DrawerContent from './DrawerContent'
import Tabs from './Tabs'
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
            path={[routes.STORIES, routes.JOBS, routes.ITEM]}
            exact
            render={() => (
              <IconButton edge='end' color='inherit' onClick={() => window.location.reload()}>
                <RefreshIcon />
              </IconButton>
            )}
          />
        </Toolbar>
      </AppBar>

      <section className={clsx(classes.drawer, classes.back)}>
        <Hidden smUp implementation='css'>
          <Drawer open={showDrawer} classes={{ paper: classes.drawerPaper }}>
            <DrawerContent
              classes={classes}
              history={history}
              location={location}
              toggleDrawer={toggleDrawer}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer open variant='permanent' classes={{ paper: classes.drawerPaper }}>
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

      <Hidden smUp implementation='css'>
        <Route
          exact
          path={[routes.STORIES, routes.JOBS]}
          render={() => <Tabs closeDrawer={() => toggleDrawer(false)} />}
        />
      </Hidden>
    </main>
  )
}

export default Navbar
