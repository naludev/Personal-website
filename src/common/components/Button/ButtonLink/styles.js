import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  box-shadow:7px 7px rgba(0,0,0,0.5);
  transition: .3s ease;
  overflow: hidden;
  cursor: pointer;
  margin: 0.5rem;
  text-decoration: none;
  background-color: ${colors.backgrounds.lightGrey};
  border: 1px solid ${colors.backgrounds.grey};
  border-radius: 3px;
 
  > :not(:last-child) {
    margin-right: 1rem;
  }

  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }

  :hover {
    transform: translateY(7px) translateX(7px);
    box-shadow: 0 0 ${colors.backgrounds.grey}; 
  }
`
