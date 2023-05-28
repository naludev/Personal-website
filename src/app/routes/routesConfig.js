import Home from 'pages/Home'
import Contact from 'pages/Contact'
import { ROUTES } from './paths'

export const routes = [
  {
    path: ROUTES.HOME,
    name: 'home',
    component: Home
  },
  {
    path: ROUTES.CONTACT,
    name: 'contact',
    component: Contact
  }
]
