import React from 'react'
import { ROUTES } from 'app/routes/paths'
import NeonTitle from 'common/components/NeonTitle'
import { Head, Links } from './styles'
import { NavLink } from '../links'

export const Header = () => (
  <Head>
    <NeonTitle type="h6" text="</>" color="secondary" />
    <Links>
      <NavLink to={ROUTES.HOME} text="Home" />
      <NavLink to={ROUTES.CONTACT} text="Contact" />
    </Links>
  </Head>
)

export default Header
