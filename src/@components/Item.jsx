import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import {
  makeStyles,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import routes from '../@views/routes'
import { CommentIcon, JobIcon, StoryIcon } from './icons'

const useStyles = makeStyles(theme => ({
  item: {
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    })
  },
  hover: {
    boxShadow: theme.shadows[6],
    transform: 'translate(0, -4px)'
  },
  title: {
    fontWeight: 600
  }
}))

const Icon = ({ item }) => {
  switch (item.type) {
    case 'job':
      return <JobIcon />
    case 'story':
      return <StoryIcon />
    case 'comment':
      return <CommentIcon />
    case 'poll':
    case 'pollopt':
    default:
      return <StoryIcon />
  }
}

export const Item = ({ item }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [elevate, setElevate] = useState(false)

  if (!item || !item.url) return null

  return (
    <ListItem
      button
      className={clsx(classes.item, elevate && classes.hover)}
      onMouseEnter={() => setElevate(true)}
      onMouseLeave={() => setElevate(false)}
      onClick={() => navigate(routes.ITEM.replace(':id', item.id))}
    >
      <ListItemAvatar>
        <Avatar>
          <Icon item={item} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item.title.toLowerCase()}
        secondary={new URL(item.url).hostname.toLowerCase()}
        primaryTypographyProps={{
          variant: 'h5',
          color: 'textPrimary',
          className: classes.title
        }}
        secondaryTypographyProps={{
          variant: 'body1',
          color: 'primary'
        }}
      />
    </ListItem>
  )
}

export const SkeletonItem = () => {
  const classes = useStyles()
  const [elevate, setElevate] = useState(false)

  return (
    <ListItem
      button
      className={clsx(classes.item, elevate && classes.hover)}
      onMouseEnter={() => setElevate(true)}
      onMouseLeave={() => setElevate(false)}
    >
      <ListItemAvatar>
        <Skeleton variant='circle' width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant='text' width='100%' />}
        secondary={<Skeleton variant='text' width='61%' />}
        primaryTypographyProps={{
          variant: 'h5',
          color: 'textPrimary',
          className: classes.title
        }}
        secondaryTypographyProps={{
          variant: 'body1',
          color: 'primary'
        }}
      />
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
