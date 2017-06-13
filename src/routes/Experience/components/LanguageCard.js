import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardTitle, CardColumns,
 CardSubtitle, CardBlock } from 'reactstrap'

const LanguageCard = ({ languages }) => {
  const renderCard = (item) => (
    <Card key={item.text}>
      <CardImg
        top
        width='100%'
        src='https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180' alt='Card image cap' />
      <CardBlock>
        <CardTitle>{item.text}</CardTitle>
        <CardSubtitle>Rank {item.rank}</CardSubtitle>
      </CardBlock>
    </Card>
  )
  return (
    <CardColumns>
      {languages.map(i => renderCard(i))}
    </CardColumns>
  )
}

LanguageCard.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
  })).isRequired,
}
LanguageCard.defaultProps = {
  languages: [
    { id:1, text: 'C#', rank: '8' },
    { id:2, text: 'Javasscript', rank: '8' },
    { id:3, text: 'C++', rank: '8' },
    { id:4, text: 'Lua', rank: '8' },
    { id:5, text: 'PHP', rank: '8' },
  ]
}
export default LanguageCard
