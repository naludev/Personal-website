import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import { ROUTES } from './paths'

export const routes = [
  {
    path: ROUTES.HOME,
    name: 'home',
    component: Home
  },
  {
    path: ROUTES.ABOUT,
    name: 'about',
    component: About
  },
  {
    path: ROUTES.CONTACT,
    name: 'contact',
    component: Contact
  }
]
