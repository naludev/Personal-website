import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SkillItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #1f2937a8;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px;
  }
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  text-align: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  p {
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a5568;
  }
`

export const IconContainer = styled.div`
  width: 2rem;
  filter: invert(100%);
  transform: scale(2);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    transform: scale(1.5);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0rem 15rem;

  @media (max-width: 1063px) {
    padding: 0rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 425px) {
    padding: inherit;
  }
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding: 0 2rem;
  z-index: 1;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`
