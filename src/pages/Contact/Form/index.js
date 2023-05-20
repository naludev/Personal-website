import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Button from 'common/components/Button'
import Title from 'common/components/Title'
import { Line, Container, StyledInput } from './styles'
import { fields } from './helper'

const Form = () => {
  const message = 'Message sent succesfully'
  const [showMessage, setShowMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'default_service',
        'template_ec2os0v',
        e.target,
        'TzCHsuZGy30rpodPy'
      )
      .then(
        () => {
          setShowMessage(true)
        },
        (error) => {
          console.log(error.text)
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
      />
      {showMessage && <Title type="h6" color="contrast" text={message} />}
    </Container>
  )
}

export default Form