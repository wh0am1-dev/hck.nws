import PropTypes from 'prop-types'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const SkeletonCard = () => (
  <Card elevation={4}>
    <CardActionArea>
      <CardMedia component='div'>
        <Skeleton variant='rect' width='100%' height={268} />
      </CardMedia>
      <CardContent>
        <Typography variant='h5' gutterBottom color='textPrimary'>
          <Skeleton variant='text' width='36%' />
        </Typography>
        <Typography variant='body1' gutterBottom color='textPrimary'>
          <Skeleton variant='text' />
          <Skeleton variant='text' />
          <Skeleton variant='text' width='61%' />
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

const ItemCard = ({ url, image, logo, title, description }) => (
  <Card elevation={4}>
    <CardActionArea href={url}>
      {(image || logo) && <CardMedia component='img' src={image || logo} />}
      {(title || description) && (
        <CardContent>
          {title && (
            <Typography variant='h5' gutterBottom color='textPrimary'>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant='body1' gutterBottom color='textPrimary'>
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
          )}
        </CardContent>
      )}
    </CardActionArea>
  </Card>
)

const OGCard = ({ og }) => (og ? <ItemCard {...og} /> : <SkeletonCard />)

OGCard.propTypes = {
  og: PropTypes.shape({
    author: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    logo: PropTypes.string,
    publisher: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    video: PropTypes.string
  })
}

export default OGCard
