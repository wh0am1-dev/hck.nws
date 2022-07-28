import PropTypes from 'prop-types'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

const OGCard = ({ url, title, description, image, logo }) => (
  <Card elevation={4}>
    <CardActionArea onClick={() => window.open(url, '_blank')}>
      {(image || logo) && <CardMedia component='img' src={image || logo} />}
      <CardContent>
        <Typography variant='h5' gutterBottom color='textPrimary'>
          {title}
        </Typography>
        <Typography variant='body1' gutterBottom color='textPrimary'>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
      </CardContent>
    </CardActionArea>
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
