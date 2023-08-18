import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const StyledButton = styled.button`
position: relative;
display: inline-flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 9px 80px;
font-size: 16px;
font-weight: 800;
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
  padding: 10px 90px;
}
`

export const StyledText = styled.p`
  @media (max-width: 425px) {
    font-size: 13px;
  }
`
