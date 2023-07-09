/* eslint-disable */
import React, { useState } from 'react'
import { ROUTES } from 'app/routes/paths'
import { FaList } from 'react-icons/fa'
import { Head, Links, MenuButton, NavLink, MobileMenu } from './styles'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Head>
      <Links>
        <DesktopNavLink to={ROUTES.HOME} text="Home" />
        <DesktopNavLink to={ROUTES.CONTACT} text="Contact" />
      </Links>
      <MenuButton onClick={toggleMobileMenu}>
        <FaList size={24} />
      </MenuButton>
      {isMobileMenuOpen && (
        <>
        <></>
        <MobileMenu>
          <MobileNavLink to={ROUTES.HOME} text="Home" />
          <MobileNavLink to={ROUTES.CONTACT} text="Contact" />
        </MobileMenu>
        </>
      )}
    </Head>
  )
}

const DesktopNavLink = ({ to, text }) => (
  <NavLink exact to={to} activeClassName="active">
    {text}
  </NavLink>
)

const MobileNavLink = ({ to, text }) => (
  <NavLink to={to} onClick={() => setIsMobileMenuOpen(false)}>
    {text}
  </NavLink>
)

export default Header
