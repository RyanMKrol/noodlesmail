# noodlesmail

## Overview

This package is just a wrapper around `nodemailer` that is setup for sending emails using gmail SMTP.

## Usage

```
// app.js
import NoodleMailClient from 'noodlesmail'

const mailClient = new NoodleMailClient({
  "user": "exampleEmailAddress",
  "pass": "examplePassword"
})

mailClient.setFrom('exampleFromAddress@gmail.com')
mailClient.setTo('exampleToAddress@gmail.com')

const subject = 'ExampleSubject'
const body = 'ExampleBody'

async function main() {
  await sender.sendMail(from, to, subject, body)
}

main()
```
