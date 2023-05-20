import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from 'app/globals/colors'

const activeLink = css`
  color: ${colors.primary.text};
`
export const LinkContent = styled(NavLink)`
  position: relative;
  display: flex;
  background-color: 'transparent';
  flex-direction: row;
  justify-content: 'center';
  align-items: center;
  padding: 1rem;
  border-style: none;
  color: ${colors.texts.white};
  text-decoration: none;
  position: relative;
  margin-inline: 0.5rem;
  font-size: 1.5vh;
  :focus {
    color: ${colors.texts.lightPurple};
  }
  :hover {
    color:  ${colors.texts.lightPurple};
  }

  ${({ $active }) => $active && activeLink}
`

export const Margin = styled.div`
  width: 14px;
`
