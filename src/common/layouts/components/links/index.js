import React from 'react'
import PropTypes from 'prop-types'
import { LinkContent } from './styles'

export const NavLink = ({ color, text, to, onClick }) => (
  <LinkContent color={color} to={to} onClick={onClick}>
    {text}
  </LinkContent>
)

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}
