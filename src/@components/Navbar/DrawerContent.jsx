import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonBase,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { version } from '@app'
import { InfoIcon, JobsIcon, StoriesIcon } from '@components/icons'
import logo from '@svg/h4x0r.nws.svg'

const DrawerContent = ({ classes, history, location, toggleDrawer }) => {
  const activeColor = useCallback(
    (path, location) => (location.pathname === path ? 'primary' : 'textPrimary'),
    []
  )

  return (
    <>
      <div className={classes.toolbar} />

      <SimpleBar className={classes.drawerScroll}>
        <nav onClick={() => toggleDrawer(false)}>
          <center>
            <ButtonBase className={classes.logoButton}>
              <Link to='/'>
                <img src={logo} alt='logo' className={classes.logo} />
              </Link>
            </ButtonBase>
          </center>

          <List>
            <Link to='/'>
              <ListItem button key='stories'>
                <ListItemIcon>
                  <StoriesIcon color={activeColor('/', location)} />
                </ListItemIcon>
                <ListItemText
                  primary='stories'
                  primaryTypographyProps={{ color: activeColor('/', location) }}
                />
              </ListItem>
            </Link>
            <Link to='/jobs'>
              <ListItem button key='jobs'>
                <ListItemIcon>
                  <JobsIcon color={activeColor('/jobs', location)} />
                </ListItemIcon>
                <ListItemText
                  primary='jobs'
                  primaryTypographyProps={{ color: activeColor('/jobs', location) }}
                />
              </ListItem>
            </Link>
          </List>

          <Divider />

          <List>
            <Link to='/about'>
              <ListItem button key='about'>
                <ListItemIcon>
                  <InfoIcon color={activeColor('/about', location)} />
                </ListItemIcon>
                <ListItemText
                  primary='about'
                  primaryTypographyProps={{ color: activeColor('/about', location) }}
                />
              </ListItem>
            </Link>
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
