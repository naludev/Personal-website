import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Button from 'common/components/Button'
import Title from 'common/components/Title'
import { Line, Container, StyledInput } from './styles'
import { fields } from './helper'

const Form = () => {
  const message = 'Message sent succesfully'
  const [showMessage, setShowMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(
        'default_service',
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_JS_API_KEY
      )
      .then(
        () => {
          setShowMessage(true)
          setLoading(false)
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
        }
      )
    e.target.reset()
  }
  return (
    <Container onSubmit={sendEmail}>
      {fields.map((i) => (
        <>
          <StyledInput type={i.type} placeholder={i.name} name={i.name} />
          <Line />
        </>
      ))}
      <Button
        type="submit"
        value="Send"
        text="Submit"
        disabled={loading}
      />
      {showMessage && <Title type="h6" color="contrast" text={message} />}
    </Container>
  )
}

export default Form
