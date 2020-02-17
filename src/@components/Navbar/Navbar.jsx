import React, { useState } from 'react'
import clsx from 'clsx'
import { Route, useHistory, useLocation } from 'react-router-dom'
import {
  AppBar,
  ButtonBase,
  Chip,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@material-ui/core'
import { version } from 'H4x0rNws'
import { Tabs } from '@components'
import { HomeIcon, InfoIcon, MenuIcon, JobsIcon, StoriesIcon } from '@components/icons'
import useStyles from './Navbar.styles'
import logo from '@svg/h4x0r.nws.svg'

const Navbar = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [showDrawer, toggleDrawer] = useState(false)
  const title = location.pathname === '/' ? null : location.pathname.slice(1)

  const activeColor = path => (location.pathname === path ? 'primary' : undefined)

  const drawer = (
    <>
      <nav onClick={() => toggleDrawer(false)}>
        <div className={classes.toolbar} />

        <center>
          <ButtonBase className={classes.logoButton} onClick={() => history.push('/')}>
            <img src={logo} alt='logo' className={classes.logo} />
          </ButtonBase>
        </center>

        <List disablePadding classes={{ root: classes.toolbar }}>
          <ListItem button key='home' onClick={() => history.push('/')}>
            <ListItemIcon>
              <HomeIcon color={activeColor('/')} />
            </ListItemIcon>
            <ListItemText
              primary='H4X0R.nws'
              primaryTypographyProps={{ color: activeColor('/') }}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='stories' onClick={() => history.push('/stories')}>
            <ListItemIcon>
              <StoriesIcon color={activeColor('/stories')} />
            </ListItemIcon>
            <ListItemText
              primary='stories'
              primaryTypographyProps={{ color: activeColor('/stories') }}
            />
          </ListItem>
          <ListItem button key='jobs' onClick={() => history.push('/jobs')}>
            <ListItemIcon>
              <JobsIcon color={activeColor('/jobs')} />
            </ListItemIcon>
            <ListItemText primary='jobs' primaryTypographyProps={{ color: activeColor('/jobs') }} />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='about' onClick={() => history.push('/about')}>
            <ListItemIcon>
              <InfoIcon color={activeColor('/about')} />
            </ListItemIcon>
            <ListItemText
              primary='about'
              primaryTypographyProps={{ color: activeColor('/about') }}
            />
          </ListItem>
        </List>
      </nav>

      <Divider />

      <Grid container className={classes.footer}>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>
            hacker news pwa
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' align='center'>
            made by{' '}
            <Link href='https://github.com/Neko250' target='_blank'>
              neko250
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} container justify='center'>
          <Chip
            label={`v${version}`}
            clickable
            component='a'
            href='https://github.com/Neko250/H4X0R.nws'
            target='_blank'
            size='small'
            color='primary'
            variant='outlined'
            className={classes.version}
          />
        </Grid>
      </Grid>
    </>
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
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{ paper: classes.drawerPaper, root: classes.back }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </section>

      <section className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <Route path={['/stories', '/jobs']} component={Tabs} />
      </section>
    </main>
  )
}

export default Navbar
