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
  width: 19rem;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 7px 7px;
  transition: all 0.3s ease 0s;
  margin: 0.5rem;
  color: ${colors.texts.white};
  text-decoration: none;
  background-color: rgb(251 251 251 / 0%);
  border: 1px solid ${colors.primary.contrast};
  border-radius: 3px;

  :focus {
    border-style: inherit;
  }
`
