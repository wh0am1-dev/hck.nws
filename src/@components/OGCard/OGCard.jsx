import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core'

const OGCard = ({ author, date, description, image, logo, publisher, title, url, video }) => (
  <Card elevation={4}>
    {(image || logo) && (
      <CardActionArea onClick={() => window.open(url, '_blank')}>
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
      <Typography variant='body1' gutterBottom>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button color='primary' onClick={() => window.open(url, '_blank')}>
        view story
      </Button>
    </CardActions>
  </Card>
)

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
