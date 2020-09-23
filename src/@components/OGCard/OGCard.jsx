import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core'
import useStyles from './OGCard.styles'

const OGCard = ({ author, date, description, image, logo, publisher, title, url, video }) => {
  const classes = useStyles()
  const [elevate, setElevate] = useState(false)
  const viewStory = useCallback(() => window.open(url, '_blank'), [url])

  return (
    <Card
      elevation={elevate ? 4 : 0}
      className={clsx(classes.card, elevate && classes.cardHover)}
      onMouseEnter={() => setElevate(true)}
      onMouseLeave={() => setElevate(false)}
      onTouchStart={() => setElevate(true)}
      onTouchEnd={() => setElevate(false)}
    >
      {(image || logo) && (
        <CardActionArea onClick={viewStory}>
          <CardMedia component='img' src={image || logo} />
        </CardActionArea>
      )}
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {title}
        </Typography>
        {(author || date) && (
          <Typography variant='subtitle1' component='span' gutterBottom>
            {author} {date && `@ ${date?.split('T').slice(0, 1)}`}
          </Typography>
        )}
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' onClick={viewStory}>
          view story
        </Button>
      </CardActions>
    </Card>
  )
}

OGCard.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.string,
  publisher: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  video: PropTypes.string
}

export default OGCard
