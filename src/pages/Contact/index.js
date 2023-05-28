import React, { useEffect } from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import NeonTitle from 'common/components/NeonTitle'
import Footer from 'pages/Home/Footer'
import { Container } from './styles'
import Form from './Form'

const Contact = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  useEffect(() => {
    logEvent(analytics, events.CONTACT)
  })

  return (
    <Container>
      <NeonTitle type="h3" color="secondary" text="Contact me" />
      <Form />
      <Footer />
    </Container>
  )
}

export default Contact
