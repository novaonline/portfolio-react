import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Loading = () => {
  return (

    /* eslint-disable max-len */
    <ReactCSSTransitionGroup transitionName='loading'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div className='text-center'>
        <svg width='126px' height='126px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' className='uil-ripple'>
          <rect x='0' y='0' width='100' height='100' fill='none' className='bk' />
          <g>
            <animate attributeName='opacity' dur='2.2s' repeatCount='indefinite' begin='-1.1s' keyTimes='0;0.33;1' values='1;1;0' />
            <circle cx='50' cy='50' r='40' stroke='#94a9ce' fill='none' strokeWidth='6' strokeLinecap='round'>
              <animate attributeName='r' dur='2.2s' repeatCount='indefinite' begin='-1.1s' keyTimes='0;0.33;1' values='0;22;44' />
            </circle>
          </g>
          <g>
            <animate attributeName='opacity' dur='2.2s' repeatCount='indefinite' begin='0s' keyTimes='0;0.33;1' values='1;1;0' />
            <circle cx='50' cy='50' r='40' stroke='#667395' fill='none' strokeWidth='6' strokeLinecap='round'>
              <animate attributeName='r' dur='2.2s' repeatCount='indefinite' begin='0s' keyTimes='0;0.33;1' values='0;22;44' />
            </circle>
          </g>
        </svg>
      </div>
    </ReactCSSTransitionGroup>
    /* eslint-enable max-len */
  )
}

export default Loading
