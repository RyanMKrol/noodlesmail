import nodemailer from 'nodemailer'

class MailSender {
  constructor(gmailCredentials) {
    validateCredentials(gmailCredentials)

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: gmailCredentials
    })
  }

  setFrom(from) {
    this.from = from
  }

  setTo(to) {
    this.to = to
  }

  async sendMail(subject, body) {
    let info = await this.transporter.sendMail({
      from: this.from,
      to: this.to,
      subject: subject,
      text: body,
    })

    console.log('Message sent: %s', info.messageId)
  }
}

function validateCredentials(credentials) {
  if (!credentials.user){
    throw new Error('Could not find `user` in credentials')
  }

  if (!credentials.pass) {
    throw new Error('Could not find `pass` in credentials')
  }
}

export default MailSender
