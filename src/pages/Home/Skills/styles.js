import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
`

export const SkillItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 425px) {
    padding: inherit;
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

  p {
    font-size: 11px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconContainer = styled.div`
  width: 2rem;
  filter: invert(100%);
  transform: scale(2);

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
