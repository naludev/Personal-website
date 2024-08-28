import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 769px) {
    &:hover img,
    &.active img {
      filter: blur(8px);
      transform: scale(1.1);
    }

    &:hover div,
    &.active div {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  transition: filter 0.3s ease, transform 0.3s ease;

  @media (max-width: 768px) {
    transition: none;
    filter: none;
    transform: none;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    position: relative;
    background: none;
    opacity: 1;
    transform: none;
  }
`

export const Content = styled.div`
  color: white;
  text-align: center;
  padding: 1rem;
`

export const TextContent = styled.div`
  margin-bottom: 16px;

  h4 {
    margin-bottom: 8px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  a {
    margin: 0 8px;
    padding: 8px 16px;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background: white;
      color: black;
    }
  }
`
