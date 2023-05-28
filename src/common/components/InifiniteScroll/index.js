import React from 'react'
import PropTypes from 'prop-types'
import { LoopSliderWrapper } from './styles'

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <LoopSliderWrapper duration={duration} reverse={reverse}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </LoopSliderWrapper>
  )
}

InfiniteLoopSlider.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired,
  reverse: PropTypes.bool,
}

export default InfiniteLoopSlider
