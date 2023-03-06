import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import {
  makeStyles,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import Error from '../@views/Error'
import useItem from '../@hooks/useItem'
import Comments from '../@components/Comments'
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
  },
  skeleton: {
    margin: 'auto'
  }
}))

const Item = () => {
  const { id } = useParams()
  const classes = useStyles()
  const { loading, item, og } = useItem(id)

  useEffect(() => window.scroll({ top: 0 }), [])

  if (loading === 'error') return <Error />

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Helmet>
        <title>{item?.title}</title>
        <meta
          property='og:title'
          content={`hck.nws · ${item?.title?.toLowerCase() || 'item'}`}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:url'
          content={`https://carlos-aguilar.com/hck.nws/item/${id}`}
        />
        <meta
          property='og:image'
          content={og?.image || 'img/hck.nws.1440.png'}
        />
      </Helmet>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' className={classes.title}>
            {item.title?.toLowerCase() || (
              <>
                <Skeleton
                  variant='text'
                  width='80%'
                  className={classes.skeleton}
                />
                <Skeleton
                  variant='text'
                  width='50%'
                  className={classes.skeleton}
                />
              </>
            )}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='subtitle1' align='center'>
            {item.by ? (
              <>
                posted by{' '}
                <Link href={`https://news.ycombinator.com/user?id=${item.by}`}>
                  {item.by || ''}
                </Link>
              </>
            ) : (
              <Skeleton
                variant='text'
                width='30%'
                className={classes.skeleton}
              />
            )}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <OGCard item={item} og={og} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='subtitle2' align='center'>
            {item.url ? (
              <Link href={item.url}>{item.url}</Link>
            ) : (
              <Skeleton
                variant='text'
                width='50%'
                className={classes.skeleton}
              />
            )}
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
    </Container>
  )
}

export default Item
