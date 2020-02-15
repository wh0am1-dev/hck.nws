import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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
import { asset } from 'H4x0rNws'
import { HomeIcon, InfoIcon, MenuIcon, JobsIcon, StoriesIcon } from '@components/icons'
import useStyles from './Navbar.styles'

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [showDrawer, toggleDrawer] = useState(false)
  const title = location.pathname === '/' ? 'H4X0R.nws' : location.pathname.slice(1)

  return (
    <>
      <AppBar position='fixed' elevation={8} color='primary'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={() => toggleDrawer(!showDrawer)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' noWrap color='secondary' classes={{ root: classes.title }}>
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
        <img src={asset('/img/h4x0r.nws.svg')} className={classes.logo} alt='' />

        <div onClick={() => toggleDrawer(false)}>
          <List disablePadding classes={{ root: classes.toolbar }}>
            <ListItem button key='home' onClick={() => history.push('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='H4X0R.nws' />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem button key='stories' onClick={() => history.push('/stories')}>
              <ListItemIcon>
                <StoriesIcon />
              </ListItemIcon>
              <ListItemText primary='stories' />
            </ListItem>
            <ListItem button key='jobs' onClick={() => history.push('/jobs')}>
              <ListItemIcon>
                <JobsIcon />
              </ListItemIcon>
              <ListItemText primary='jobs' />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem button key='about' onClick={() => history.push('/about')}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='about' />
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
              made by{' '}
              <Link href='https://github.com/Neko250' target='_blank'>
                neko250
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Drawer>

      <div className={classes.toolbar} />
    </>
  )
}

export default Navbar
