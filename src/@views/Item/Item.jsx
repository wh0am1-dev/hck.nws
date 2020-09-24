import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Container, Grid, Link, Typography } from '@material-ui/core'
import { api } from '@app'
import { addSnack } from '@store/app'
import { Error } from '@views'
import { Comments, Loading, OGCard } from '@components'
import useStyles from './Item.styles'

const Item = () => {
  const { id } = useParams()
  const classes = useStyles()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})
  const [metadata, setMetadata] = useState(null)
  const [showOGCard, setShowOGCard] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.getItem({
      id,
      done: item => {
        setItem(item)
        api.getOG({
          url: item.url,
          done: metadata => {
            setMetadata(metadata)
            setLoading(false)
          },
          error: () => setLoading(false)
        })
      },
      error: error => {
        setLoading('error')
        dispatch(addSnack({ error }))
      }
    })
  }, [id, dispatch])

  useEffect(() => {
    if (metadata) {
      const { title, description, image, logo } = metadata
      if (title || description || image || logo) setShowOGCard(true)
    }
  }, [metadata, setShowOGCard])

  if (loading === 'error') return <Error />

  return (
    <Container maxWidth='sm' classes={{ root: classes.container }}>
      <Helmet title={item.title} />

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
              <Link href={item.url} target='_blank'>
                {item.url ? new URL(item.url).hostname.toLowerCase() : ''}
              </Link>
            </Typography>
            <Typography variant='subtitle1' align='center'>
              posted by{' '}
              <Link href={`https://news.ycombinator.com/user?id=${item.by}`} target='_blank'>
                {item.by?.toLowerCase() || ''}
              </Link>
            </Typography>
          </Grid>

          {showOGCard && (
            <Grid item xs={12}>
              <OGCard {...metadata} />
            </Grid>
          )}

          <Grid item xs={12} container justify='center'>
            <Typography variant='subtitle2' align='center'>
              <Link href={item.url} target='_blank'>
                {item.url}
              </Link>
            </Typography>
          </Grid>

          {item.kids?.length > 0 && (
            <Grid item xs={12}>
              <Comments list={item.kids} />
            </Grid>
          )}

          <Grid item xs={12} container justify='center'>
            <Link href={`https://news.ycombinator.com/item?id=${id}`} target='_blank'>
              view on hn
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Item
