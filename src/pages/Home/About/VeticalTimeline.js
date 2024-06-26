import React, { useState, useRef, useEffect } from 'react'
import ButtonLink from 'common/components/Button/ButtonLink'
import PropTypes from 'prop-types'
import {
  TimelineContainer,
  CentralLine,
  TimelineItem,
  ItemCardTitle,
  ItemTitle,
  ItemSubtitle,
  ItemDetails,
  ButtonContainer
} from './styles'

const VerticalTimeline = ({ items }) => {
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef(null)

  const handleToggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  useEffect(() => {
    if (expanded) {
      containerRef.current.style.maxHeight = 'none'
    } else {
      containerRef.current.style.maxHeight = '300px'
    }
  }, [expanded])

  return (
    <div>
      <TimelineContainer ref={containerRef} expanded={expanded}>
        <CentralLine />
        {items.map((item) => (
          <TimelineItem key={item.title}>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemCardTitle>{item.cardTitle}</ItemCardTitle>
            <ItemSubtitle>{item.cardSubtitle}</ItemSubtitle>
            <ItemDetails>{item.cardDetailedText}</ItemDetails>
          </TimelineItem>
        ))}
      </TimelineContainer>
      <ButtonContainer>
        <ButtonLink onClick={handleToggleExpand} text={expanded ? 'show less' : 'show more'} />
      </ButtonContainer>
    </div>
  )
}

VerticalTimeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cardTitle: PropTypes.string.isRequired,
      cardSubtitle: PropTypes.string,
      cardDetailedText: PropTypes.string.isRequired
    })
  ).isRequired
}

export default VerticalTimeline
