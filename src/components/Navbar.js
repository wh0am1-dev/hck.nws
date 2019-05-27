import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { MenuRounded as MenuIcon } from '@material-ui/icons'
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'

import {
  HomeIcon,
  InfoIcon,
  JobsIcon,
  StoriesIcon
} from './icons'

const DRAWER_WIDTH = 240
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    width: DRAWER_WIDTH,
    backgroundColor: theme.palette.background.paper
  },
  logo: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
    width: theme.spacing(16),
    height: theme.spacing(16)
    // borderRadius: '100%',
    // boxShadow: theme.shadows[8],
    // border: '1px solid #111'
  },
  footer: {
    margin: theme.spacing(3, 0)
  },
  toolbar: theme.mixins.toolbar
}))

const Navbar = props => {
  const classes = useStyles()
  const [ showDrawer, toggleDrawer ] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  let title = props.location.pathname === '/' ? 'H4X0R.nws' : props.location.pathname

  return <>
    <AppBar position='fixed' elevation={trigger ? 8 : 0}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          onClick={() => toggleDrawer(!showDrawer)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h5' noWrap style={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>

    <Drawer
      open={showDrawer}
      onClose={() => toggleDrawer(false)}
      classes={{ paper: classes.drawer }}
      ModalProps={{ keepMounted: true }}
    >
      <DrawerContent />
    </Drawer>

    <div className={classes.toolbar} />
  </>

  function DrawerContent () {
    return <>
      <img src='img/h4x0r.nws.svg' className={classes.logo} alt='' />

      <div onClick={() => toggleDrawer(false)}>
        <List disablePadding classes={{ root: classes.toolbar }}>
          <ListItem button key='home'
            onClick={() => props.history.push('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='H4X0R.nws' />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='stories'
            onClick={() => props.history.push('/stories')}>
            <ListItemIcon><StoriesIcon /></ListItemIcon>
            <ListItemText primary='/stories' />
          </ListItem>
          <ListItem button key='jobs'
            onClick={() => props.history.push('/jobs')}>
            <ListItemIcon><JobsIcon /></ListItemIcon>
            <ListItemText primary='/jobs' />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key='about'
            onClick={() => props.history.push('/about')}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary='/about' />
          </ListItem>
        </List>
      </div>

      <Divider />

      <Grid container className={classes.footer}>
        <Grid item xs={12}>
          <Typography variant='body1' align='center'>
            hacker news pwa
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' align='center'>
            made by <Link href='https://github.com/Neko250' target='_blank'>neko250</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  }
}

export default Navbar
