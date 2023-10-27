'use server'

import sgMail from '@sendgrid/mail'

const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string
sgMail.setApiKey(apiKey)

export const sendMail = async (formData: FormData) => {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const msgToSend = {
    to: 'valentingt22@gmail.com',
    from: 'gonzaleztrapagav@gmail.com',
    subject: `Portfolio message - ${name} - ${email}`,
    html: `
    <h1>${name} has sent you a message!</h1>
    <h2>Email: ${email}</h2>
    <p>Message: ${message}</p>
    `
  }

  try {
    await sgMail.send(msgToSend)
  } catch (error) {
    console.log(error)
  }
}
