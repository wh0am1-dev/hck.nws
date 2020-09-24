import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { CommentIcon, JobIcon, StoryIcon } from '@components/icons'
import useStyles from './Item.styles'

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
    <Link to={`/item/${item.id}`}>
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
