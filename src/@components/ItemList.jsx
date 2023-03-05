import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import { Item, SkeletonItem } from './Item'

const ItemList = ({ fetching, items }) => (
  <List>
    {fetching
      ? new Array(64).fill(null).map((_, i) => <SkeletonItem key={i} />)
      : items.map((item, _) => <Item key={item.id} item={item} />)}
  </List>
)

ItemList.propTypes = {
  fetching: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object)
}

ItemList.defaultProps = {
  items: []
}

export default ItemList
