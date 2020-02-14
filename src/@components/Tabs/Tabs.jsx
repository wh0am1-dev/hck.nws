import React, { useCallback, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { StoriesIcon, JobsIcon } from '@components/icons'
import useStyles from './Tabs.styles'

const Tabs = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const [section, setSection] = useState(location.pathname)
  const onChange = useCallback((ev, newSection) => {
    setSection(newSection)
    history.push(newSection)
  }, []) // eslint-disable-line

  return (
    <BottomNavigation value={section} onChange={onChange} elevation={8} className={classes.root}>
      <BottomNavigationAction label='stories' value='/stories' icon={<StoriesIcon />} />
      <BottomNavigationAction label='jobs' value='/jobs' icon={<JobsIcon />} />
    </BottomNavigation>
  )
}

export default Tabs
