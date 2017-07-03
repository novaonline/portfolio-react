import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardImg, CardTitle,
  CardSubtitle, CardBlock
} from 'reactstrap'

const CardItem = ({ item, toggleSelectionAsync, groupName }) => (
  <Card
    outline={item.isSelected}
    color={item.isSelected ? 'primary' : null}
    onClick={() => toggleSelectionAsync(item.id, groupName)}
    className='mb-3 smooth'>
    <CardImg
      top
      width='100%'
      src={item.info.imageUrl || 'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180'}
      alt='Card image cap' />
    <CardBlock>
      <CardTitle>{item.title}</CardTitle>
      <CardSubtitle>Rank {item.rank.id}</CardSubtitle>
    </CardBlock>
  </Card>
)

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    info: PropTypes.shape({
      description: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
    rank: PropTypes.shape({
      info: PropTypes.shape({
        description: PropTypes.string,
        imageUrl: PropTypes.string,
      }),
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  toggleSelectionAsync: PropTypes.func,
  groupName: PropTypes.string.isRequired,
}

CardItem.defaultProps = {
  toggleSelectionAsync: () => {},
}

export default CardItem
