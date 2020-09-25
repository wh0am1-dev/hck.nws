import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { routes } from '@app'
import { StoriesIcon, JobsIcon } from '@components/icons'
import useStyles from './Tabs.styles'

const Tabs = ({ closeDrawer }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const [section, setSection] = useState(location.pathname)
  const onChange = useCallback(
    (ev, newSection) => {
      closeDrawer()
      setSection(newSection)
      history.push(newSection)
    },
    [closeDrawer, setSection, history]
  )

  useEffect(() => setSection(location.pathname), [location, setSection])

  return (
    <BottomNavigation value={section} onChange={onChange} className={classes.root}>
      <BottomNavigationAction label='stories' value={routes.STORIES} icon={<StoriesIcon />} />
      <BottomNavigationAction label='jobs' value={routes.JOBS} icon={<JobsIcon />} />
    </BottomNavigation>
  )
}

export default Tabs
