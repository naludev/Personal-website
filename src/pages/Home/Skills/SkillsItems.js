// SkillsItems.js
import React from 'react'
import Title from 'common/components/Title'
import Text from 'common/components/Text'
import Icon from 'common/components/Icon'
import PropTypes from 'prop-types'
import { SkillItemContainer, IconContainer, ItemContainer, GridContainer, Item } from './styles'

const SkillsItems = ({ items }) => (
  <GridContainer>
    {items.map((item) => (
      <SkillItemContainer key={item.title}>
        <Title text={item.title} type="h6" color="secondary" />
        <ItemContainer>
          {item.items.map((i) => (
            <Item key={i.description}>
              <IconContainer>
                <Icon size="small" icon={i.icon} />
              </IconContainer>
              <Text
                type="subtitle1"
                text={i.description}
                color="white"
              />
            </Item>
          ))}
        </ItemContainer>
      </SkillItemContainer>
    ))}
  </GridContainer>
)

SkillsItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
}

export default SkillsItems
