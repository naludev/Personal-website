import styled from 'styled-components'
import NeonTitle from 'common/components/NeonTitle'
import { colors } from 'app/globals/colors'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 4rem;
  background-color: ${colors.backgrounds.black};
  grid-area: header;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
    align-items: end;
  }
`

export const Links = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(RouterNavLink)`
  color: ${colors.primary.contrast};
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 14px;
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.primary.contrast};
  cursor: pointer;
  font-size: 1.5rem;
  outline: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const MobileMenu = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-right: 2em;
    align-items: self-end;
  }
`

export const NeonTitleWrapper = styled(NeonTitle)`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`
