import React from 'react'
import PropTypes from 'prop-types'
import Header from 'common/layouts/components/header'
import { Container, Page } from './styles'

export const Layout = ({ children }) => (
  <Container>
    <Header />
    <Page>
      {children}
    </Page>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node
}
