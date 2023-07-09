import React, { useState } from 'react'
import { ROUTES } from 'app/routes/paths'
import NeonTitle from 'common/components/NeonTitle'
import { FiMenu } from 'react-icons/fi'
import { Head, Links, MenuButton, NavLink, MobileMenu } from './styles'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Head>
      <NeonTitle type="h6" text="</>" color="secondary" />
      <Links>
        <NavLink to={ROUTES.HOME} text="Home" />
        <NavLink to={ROUTES.CONTACT} text="Contact" />
      </Links>
      <MenuButton onClick={toggleMobileMenu}>
        <FiMenu size={24} />
      </MenuButton>
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLink to={ROUTES.HOME} text="Home" />
          <NavLink to={ROUTES.CONTACT} text="Contact" />
        </MobileMenu>
      )}
    </Head>
  )
}

export default Header
