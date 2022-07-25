import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  makeStyles,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import { CommentIcon, JobIcon, StoryIcon } from './icons'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.text.primary,
    '&:active': {}
  },
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

const Item = ({ item }) => {
  const classes = useStyles()
  const [elevate, setElevate] = useState(false)

  if (!item || !item.url) return null

  return (
    <Link to={`/item/${item.id}`} className={classes.link}>
      <ListItem
        button
        classes={{ root: clsx(classes.item, elevate && classes.hover) }}
        onMouseEnter={() => setElevate(true)}
        onMouseLeave={() => setElevate(false)}
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
            classes: { root: classes.title }
          }}
          secondaryTypographyProps={{
            variant: 'body1',
            color: 'primary'
          }}
        />
      </ListItem>
    </Link>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
