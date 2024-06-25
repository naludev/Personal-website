import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 30px;
  box-shadow:7px 7px rgba(0,0,0,0.5);
  transition: .3s ease;
  overflow: hidden;
  cursor: pointer;
  margin: 0.5rem;
  text-decoration: none;
  background-color: rgb(137 79 255 / 29%);
  color: ${colors.primary.secondary};
  border: 1px solid transparent;
  border-radius: 20px;
 
  > :not(:last-child) {
    margin-right: 1rem;
  }

  :disabled {
    cursor: inherit;
    opacity: 0.5;
  }

  :hover {
    color: ${colors.primary.secondary};
    border: 1px solid ${colors.primary.secondary};
  }

  @media (max-width: 425px) {
    padding: 10px 13px;
  }
`

export const StyledText = styled.p`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
