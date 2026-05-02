import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nalú Muñoz Portfolio',
    short_name: 'Nalú Muñoz',
    description: 'Portfolio profesional de Nalú Muñoz, Ssr Software Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#f6ff17',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
