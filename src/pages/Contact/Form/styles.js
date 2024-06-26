import { colors } from 'app/globals/colors'
import styled from 'styled-components'

export const Line = styled.div`
  height: 1em;
`

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;
  align-items: center;
`

export const StyledInput = styled.input`
  background: white;
  color: ${colors.texts.black};
  transition: all 200ms ease 0s;
  border: 0px;
  height: 2.4rem;
  width: 27vh;
  padding: 0px calc(1rem);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2rem;

  background-color: rgb(137 79 255 / 29%);
  color: ${colors.texts.white};

  :focus {
    outline: none;
    background-color: rgb(137 79 255 / 29%);
    color: ${colors.texts.white};
  }

  ::placeholder {
    color: ${colors.texts.white};
    opacity: 0.5;
  }
`
