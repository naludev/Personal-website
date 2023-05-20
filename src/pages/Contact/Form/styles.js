import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Line = styled.div`
  height: 1em;
`

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 0 0;
  align-items: center;
`

export const StyledInput = styled.input`
  width: 20rem;
  padding: 10px;
  box-shadow: 7px 7px rgba(0,0,0,0.5);
  transition: .3s ease;
  margin: 0.5rem;
  text-decoration: none;
  background-color: ${colors.backgrounds.lightGrey};
  border: 1px solid ${colors.backgrounds.grey};
  border-radius: 3px;
`
