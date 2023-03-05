import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import {
  makeStyles,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core'
import Error from '../@views/Error'
import useItem from '../@hooks/useItem'
import Comments from '../@components/Comments'
import Loading from '../@components/Loading'
import OGCard from '../@components/OGCard'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6, 4)
    }
  },
  title: {
    fontWeight: 800
  }
}))

const Item = () => {
  const { id } = useParams()
  const classes = useStyles()
  const { loading, item, og } = useItem(id)

  if (loading === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet>
        <title>{item?.title}</title>
        <meta
          property='og:title'
          content={`hck.nws · ${item?.title?.toLowerCase()}`}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`https://carlos-aguilar.com/hck.nws/item/${id}`}
        />
        <meta property='og:image' content={og?.image} />
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h3' align='center' className={classes.title}>
              {item.title?.toLowerCase()}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='subtitle1' align='center'>
              posted by{' '}
              <Link href={`https://news.ycombinator.com/user?id=${item.by}`}>
                {item.by || ''}
              </Link>
            </Typography>
          </Grid>

          {(og?.title || og?.description || og?.image || og?.logo) && (
            <Grid item xs={12}>
              <OGCard {...og} />
            </Grid>
          )}

          <Grid item xs={12} container justifyContent='center'>
            <Typography variant='subtitle2' align='center' noWrap>
              <Link href={item.url}>{item.url || ''}</Link>
            </Typography>
          </Grid>

          {item.kids?.length > 0 && (
            <Grid item xs={12}>
              <Comments list={item.kids} />
            </Grid>
          )}

          <Grid item xs={12} container justifyContent='center'>
            <Link href={`https://news.ycombinator.com/item?id=${id}`}>
              view on hn
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Item
