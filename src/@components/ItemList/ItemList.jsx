import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import Item from './Item'

const ItemList = ({ items }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)
    let showTimeout = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(showTimeout)
  }, [items])

  return (
    <List>
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
  items: PropTypes.arrayOf(PropTypes.object)
}

ItemList.defaultProps = {
  items: []
}

export default ItemList
