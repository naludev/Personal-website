// Skills.js
import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import { Container, DescriptionContainer, Content } from './styles'
import SkillsItems from './SkillsItems'

const items = [{
  title: 'FRONTEND',
  items: [
    { icon: 'html', description: 'HTML' },
    { icon: 'css', description: 'CSS' },
    { icon: 'javascript', description: 'JavaScript' },
    { icon: 'typescript', description: 'Typescript' },
    { icon: 'reactnative', description: 'React JS' },
    { icon: 'nextjs2', description: 'Next JS' },
    { icon: 'tailwind', description: 'Tailwind CSS' },
    { icon: 'sass', description: 'SASS' },
    { icon: 'bootstrap', description: 'Bootstrap' },
    { icon: 'svelte', description: 'Svelte' },
    { icon: 'vuejs', description: 'Vue JS' },
    { icon: 'angular', description: 'Angular' },
    { icon: 'backbone', description: 'Backbone JS' },
    { icon: 'test', description: 'Unit test' },
    { icon: 'reactnative', description: 'React Native' },
    { icon: 'styledcomponent', description: 'Styled Components' }
  ]
},
{
  title: 'DEVTOOLS',
  items: [
    { icon: 'git', description: 'GIT' },
    { icon: 'github', description: 'Github' },
    { icon: 'gitlab', description: 'Gitlab' },
    { icon: 'bitbucket', description: 'Bitbucket' },
    { icon: 'npm', description: 'NPM' },
    { icon: 'vscode', description: 'VSCode' },
    { icon: 'storybook', description: 'Storybook' },
    { icon: 'figma', description: 'Figma' },
    { icon: 'firebase', description: 'Firebase' },
    { icon: 'payment', description: 'Payment Integration' }
  ]
},
{
  title: 'Learning',
  items: [
    { icon: 'git', description: 'Node JS' }
  ]
}
]

const Skills = () => (
  <Container>
    <Content>
      <DescriptionContainer>
        <NeonTitle text="technologies" type="h1" color="secondary" />
        <Text
          color="white"
          type="subtitle1"
          text="As a web developer, I have gained experience and
        skills in a variety of technologies and tools"
        />
      </DescriptionContainer>
      <SkillsItems items={items} />
    </Content>
  </Container>
)

export default Skills
