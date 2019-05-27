import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Avatar,
  Divider,
  Fade as Trans,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import {
  CommentIcon,
  JobIcon,
  StoryIcon
} from './icons'

const useStyles = makeStyles(theme => ({
  item: {
    borderRadius: theme.shape.borderRadius
  }
}))

const Item = props => {
  const classes = useStyles()
  if (!props.item.url) return null

  const { item, divider, show, delay } = props

  return <>
    <Trans in={show} timeout={delay} direction='up'>
      <div>
        <ListItem button classes={{ root: classes.item }}
          onClick={() => window.open(item.url, '_blank')}>
          <ListItemAvatar>
            <Avatar><Icon /></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={trimUrl(item.url)}
            primaryTypographyProps={{
              variant: 'body1',
              style: { fontWeight: 600 }
            }}
            secondaryTypographyProps={{
              variant: 'body2',
              color: 'primary'
            }}
          />
        </ListItem>

        {divider ? null : <Divider component='li' variant='inset' />}
      </div>
    </Trans>
  </>

  function Icon () {
    switch (item.type) {
      case 'job': return <JobIcon />
      case 'story': return <StoryIcon />
      case 'comment': return <CommentIcon />
      case 'poll':
      case 'pollopt':
      default: return <StoryIcon />
    }
  }

  function trimUrl (url) {
    let domain = url.match(/[--:\w?@%&+~#=]*\.[a-z]+(?=\/)/)
    if (domain && domain.length) return domain[0]
    return url
  }
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
