import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Avatar,
  Divider,
  Fade as Trans,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
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

const Item = ({ item, divider, show, delay }) => {
  const classes = useStyles()
  const theme = useTheme()
  const large = useMediaQuery(theme.breakpoints.up('sm'))
  const [elevate, setElevate] = useState(false)

  if (!item || !item.url) return null

  return (
    <Trans in={show} timeout={delay} direction='up'>
      <div>
        <ListItem
          button
          classes={{ root: clsx(classes.item, elevate && classes.hover) }}
          onClick={() => window.open(item.url, '_blank')}
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
              variant: large ? 'h5' : 'body2',
              classes: { root: classes.title }
            }}
            secondaryTypographyProps={{
              variant: large ? 'body1' : 'body2',
              color: 'primary'
            }}
          />
        </ListItem>

        {divider ? <Divider component='li' variant='inset' /> : null}
      </div>
    </Trans>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  divider: PropTypes.bool,
  show: PropTypes.bool,
  delay: PropTypes.number
}

Item.defaultProps = {
  divider: false,
  show: true,
  delay: 0
}

export default Item
