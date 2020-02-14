import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, List } from '@material-ui/core'
import { Item } from '@components'
import useStyles from './ItemList.styles'

const ItemList = ({ items, loading }) => {
  const classes = useStyles()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)

    let showTimeout
    if (items && items.length) showTimeout = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(showTimeout)
  }, [items])

  if (loading)
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    )

  return (
    <List className={classes.list}>
      {items.map((item, i, list) => (
        <Item
          key={i}
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool
}

ItemList.defaultProps = {
  loading: false
}

export default ItemList
