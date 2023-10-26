import { SubmitButton } from './ContactButton'
import { ContactTextInput, ContactTextArea } from './ContactInputText'
import { ContactLabel } from './ContactLabel'
import { ContactP } from './ContactP'

export const ContactForm = () => {
  return (
    <form className="flex flex-col w-full gap-4 items-center">
      <ContactLabel>
        <ContactP>Name</ContactP>
        <ContactTextInput />
      </ContactLabel>
      <ContactLabel>
        <ContactP>Email</ContactP>
        <ContactTextInput />
      </ContactLabel>
      <ContactLabel>
        <ContactP>Message</ContactP>
        <ContactTextArea />
      </ContactLabel>
      <SubmitButton />
    </form>
  )
}
