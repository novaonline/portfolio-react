import React from 'react'
import PropTypes from 'prop-types'
import { CardColumns } from 'reactstrap'
import CardItem from './CardItem'
import { cardItemPropType } from '../../../utilities/propTypes'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const CardGroup = ({ fetchAsync, filteredData, fullData, searchTerm, groupName, toggleSelectionAsync }) => {
  return (
    <div className='smooth'>
      <ReactCSSTransitionGroup transitionName='animatedCard'
        transitionEnterTimeout={460}
        transitionLeaveTimeout={100}>
        {
          filteredData &&
          filteredData.length <= 0 &&
          (<div>No {groupName} Found for &#x22;{searchTerm}&#x22;</div>)
        }
      </ReactCSSTransitionGroup>
      <CardColumns>
        <ReactCSSTransitionGroup transitionName='animatedCard'
          transitionEnterTimeout={460}
          transitionLeaveTimeout={100}>
          {
            filteredData
              ? Object.keys(filteredData).map(k => <CardItem
                item={filteredData[k]}
                key={`card_all_${filteredData[k].groupName}_${filteredData[k].id}`}
                groupName={groupName}
                toggleSelectionAsync={toggleSelectionAsync} />)
              : Object.keys(fullData || {}).map(k => <CardItem
                item={fullData[k]}
                key={`card_all_${fullData[k].groupName}_${fullData[k].id}`}
                groupName={groupName}
                toggleSelectionAsync={toggleSelectionAsync} />)
          }
        </ReactCSSTransitionGroup>
      </CardColumns>
    </div >
  )
}

CardGroup.propTypes = {
  fetchAsync: PropTypes.func.isRequired,
  fullData: cardItemPropType,
  filteredData: cardItemPropType,
  searchTerm: PropTypes.string,
  groupName: PropTypes.string.isRequired,
  toggleSelectionAsync: PropTypes.func.isRequired,
}

CardGroup.defaultProps = {
  fetchAsync: () => { },
  fullData: {},
  filteredData: null,
  searchTerms: '',
}
export default CardGroup
