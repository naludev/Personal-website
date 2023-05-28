/* eslint-disable */
import { useEffect, useState } from 'react'
import { LoopSliderWrapper, TagWrapper, fadeAnimation } from './styles'

export const frontend = ['Javascript', 'React JS', 'React Native', 'Android', 'Redux', 'HTML', 'CSS',
  'Sass', 'Styled Components', 'Storybook', 'Unit testing', 'Tailwind', 'Bootstrap', 'Svelte', 'Angular', 'Backbone', 'Vue JS', 'Angular',
  'SQL', 'Node', 'Github', 'CMS', 'Strapi', 'Netsuite ecommerce', 'Firebase', 'Google analytics']

export const renderTags = () => {
  const [isMobile, setIsMobile] = useState()
  const DURATION = 10000
  const ROWS = 3
  const TAGS_PER_ROW = isMobile ? 1 : 5

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
  const shuffle = (arr) => [...arr].sort(() => 0.2 - Math.random())

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 425
        if (ismobile !== isMobile) setIsMobile(isMobile)
      },
      false
    )
  }, [isMobile]);

  return [...Array(ROWS)].map((_, i) => {
    const duration = random(DURATION - 5000, DURATION + 5000)
    const reverse = i % 2 === 5
    const tags = shuffle(frontend).slice(0, TAGS_PER_ROW)

    return (
      <LoopSliderWrapper key={i} duration={duration} reverse={reverse} animation={fadeAnimation}>
        <div className='inner'>
          {tags.map((tag, index) => (
            <TagWrapper key={index}>
              <span>#</span> {tag}
            </TagWrapper>
          ))}
        </div>
      </LoopSliderWrapper>
    )
  })
}
