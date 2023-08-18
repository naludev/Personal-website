import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div
      style={{
        backgroundColor:
          'linear-gradient(90deg, rgba(50,79,0,1) 0%, rgba(0,0,0,1) 50%, rgba(50,79,0,1) 100%)'
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 10, density: { enable: false, value_area: 800 } },
            color: { value: '#fff' },
            size: {
              value: 1,
              random: false,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            rotate: { value: 0, random: true, direction: 'clockwise' },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out'
            }
          },
          retina_detect: true
        }}
      />
    </div>
  )
}

export default BackgroundParticles
