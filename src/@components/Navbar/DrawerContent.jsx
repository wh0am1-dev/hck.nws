import React, { useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  ButtonBase,
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { version, routes } from '@app'
import { InfoIcon, JobsIcon, StoriesIcon } from '@components/icons'
import logo from '@svg/h4x0r.nws.svg'

const DrawerContent = ({ classes, history, location, toggleDrawer }) => {
  const activeColor = useCallback(
    (path, location, icon = false) =>
      location.pathname === path ? 'primary' : icon ? undefined : 'textPrimary',
    []
  )

  return (
    <>
      <div className={classes.toolbar} />

      <SimpleBar className={classes.drawerScroll}>
        <nav onClick={() => toggleDrawer(false)}>
          <center>
            <ButtonBase className={classes.logoButton}>
              <RouterLink to={routes.STORIES}>
                <img src={logo} alt='logo' className={classes.logo} />
              </RouterLink>
            </ButtonBase>
          </center>

          <List>
            <RouterLink to={routes.STORIES}>
              <ListItem button key='stories'>
                <ListItemIcon>
                  <StoriesIcon color={activeColor(routes.STORIES, location, true)} />
                </ListItemIcon>
                <ListItemText
                  primary='stories'
                  primaryTypographyProps={{ color: activeColor(routes.STORIES, location) }}
                />
              </ListItem>
            </RouterLink>
            <RouterLink to={routes.JOBS}>
              <ListItem button key='jobs'>
                <ListItemIcon>
                  <JobsIcon color={activeColor(routes.JOBS, location, true)} />
                </ListItemIcon>
                <ListItemText
                  primary='jobs'
                  primaryTypographyProps={{ color: activeColor(routes.JOBS, location) }}
                />
              </ListItem>
            </RouterLink>
          </List>

          <Divider />

          <List>
            <RouterLink to={routes.ABOUT}>
              <ListItem button key='about'>
                <ListItemIcon>
                  <InfoIcon color={activeColor(routes.ABOUT, location, true)} />
                </ListItemIcon>
                <ListItemText
                  primary='about'
                  primaryTypographyProps={{ color: activeColor(routes.ABOUT, location) }}
                />
              </ListItem>
            </RouterLink>
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
      </SimpleBar>
    </>
  )
}

export default DrawerContent
