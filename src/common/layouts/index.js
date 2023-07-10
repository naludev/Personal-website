import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'common/layouts/components/nav'
import { Container, Page } from './styles'

export const Layout = ({ children }) => (
  <Container>
    <Nav />
    <Page>
      {children}
    </Page>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node
}
