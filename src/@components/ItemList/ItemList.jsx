import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Grid, List, Typography } from '@material-ui/core'
import { ErrorIcon } from '@components/icons'
import useStyles from './ItemList.styles'
import Item from './Item'

const ItemList = ({ items, loading }) => {
  const classes = useStyles()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)

    let showTimeout
    if (items && items.length) showTimeout = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(showTimeout)
  }, [items])

  if (loading === 'error')
    return (
      <section className={classes.center}>
        <Grid container spacing={0} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <ErrorIcon style={{ fontSize: 120, marginBottom: 16 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5'>
              oops...{' '}
              <span role='img' aria-label='oops'>
                😖
              </span>
              <br />
              something went wrong
            </Typography>
          </Grid>
        </Grid>
      </section>
    )

  if (loading)
    return (
      <section className={classes.center}>
        <CircularProgress />
      </section>
    )

  return (
    <List className={classes.list}>
      {items.map((item, i, list) => (
        <Item
          key={item?.id}
          item={item}
          show={show}
          delay={2000 * Math.log10(i)}
          divider={i !== list.length - 1 && false}
        />
      ))}
    </List>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

ItemList.defaultProps = {
  items: [],
  loading: false
}

export default ItemList
