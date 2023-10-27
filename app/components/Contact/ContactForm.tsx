'use client'
import { useRef } from 'react'
import { SubmitButton } from './ContactButton'
import { ContactTextInput, ContactTextArea } from './ContactInputText'
import { ContactLabel } from './ContactLabel'
import { ContactP } from './ContactP'
import { sendMail } from '@/app/actions'

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const submitForm = async (formData: FormData) => {
    try {
      await sendMail(formData)
    } catch (error) {}
    formRef.current?.reset()
  }

  return (
    <form
      ref={formRef}
      action={submitForm}
      className="flex flex-col sm:w-full gap-4 items-center w-[80vw]"
    >
      <ContactLabel>
        <ContactP>Name</ContactP>
        <ContactTextInput name="name" type="text" />
      </ContactLabel>
      <ContactLabel>
        <ContactP>Email</ContactP>
        <ContactTextInput name="email" type="email" />
      </ContactLabel>
      <ContactLabel>
        <ContactP>Message</ContactP>
        <ContactTextArea name="message" />
      </ContactLabel>
      <SubmitButton />
    </form>
  )
}
