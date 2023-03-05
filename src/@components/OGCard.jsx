import PropTypes from 'prop-types'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const OGCard = ({ item, og }) => (
  <Card elevation={4}>
    <CardActionArea href={og?.url || item.url}>
      {og?.image || og?.logo ? (
        <CardMedia component='img' src={og?.image || og?.logo} />
      ) : (
        <Skeleton variant='rect' width='100%' height={268} />
      )}
      <CardContent>
        <Typography variant='h5' gutterBottom color='textPrimary'>
          {og?.title || <Skeleton variant='text' />}
        </Typography>
        <Typography variant='body1' gutterBottom color='textPrimary'>
          {(og?.description && (
            <span dangerouslySetInnerHTML={{ __html: og?.description }} />
          )) || (
            <>
              <Skeleton variant='text' />
              <Skeleton variant='text' />
            </>
          )}
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
