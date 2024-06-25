// VerticalTimeline.js
import React, { useState, useRef, useEffect } from 'react'
import ButtonLink from 'common/components/Button/ButtonLink'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TimelineContainer = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  max-height: ${(props) => (props.expanded ? 'none' : '300px')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.expanded ? '1' : '0.9')};
`

const CentralLine = styled.div`
  position: absolute;
  left: 8.5%;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #693BCC;
  transform: translateX(-50%);
`

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -2%;
    top: 10px;
    width: 15px;
    height: 15px;
    background-color: #693BCC;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`

const ItemCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: rgb(80, 203, 31);
`

const ItemTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #fafafa;
`

const ItemSubtitle = styled.h4`
  margin: 5px 0;
  padding: 0;
  font-size: 1rem;
  color: rgb(137, 79, 255);
`

const ItemDetails = styled.div`
  margin: 0;
  padding: 0;
  color: #fafafa;
  font-size: 13px;
  line-height: 1.5;

  @media (max-width: 425px) {
    font-size: 10px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: margin-top 1s ease-in-out;
`

const VerticalTimeline = ({ items }) => {
  const [expanded, setExpanded] = useState(false)
  const [containerHeight, setContainerHeight] = useState('250px')
  const containerRef = useRef(null)

  const handleToggleExpand = () => {
    if (!expanded) {
      setContainerHeight(`${containerRef.current.scrollHeight}px`)
    } else {
      setContainerHeight('250px')
    }
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (expanded) {
      setContainerHeight('none')
    }
  }, [expanded])

  return (
    <div>
      <TimelineContainer
        ref={containerRef}
        expanded={expanded}
        style={{ maxHeight: containerHeight }}
      >
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
      <ButtonContainer expanded={expanded}>
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
