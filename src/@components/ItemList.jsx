import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import Item from './Item'

const ItemList = ({ items }) => (
  <List>
    {items.map((item, i) => (
      <Item key={item?.id} item={item} />
    ))}
  </List>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

ItemList.defaultProps = {
  items: []
}

export default ItemList
