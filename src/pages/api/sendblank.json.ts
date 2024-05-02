import nodemailer from 'nodemailer'
// Helpers
import { htmlTemplate } from '@Helpers/emailTemplate';
// Types
import type { APIRoute } from 'astro'
import type { IFormData } from '@Types';

const user = import.meta.env.GMAIL_USER
const pass = import.meta.env.GMAIL_PASS
export const POST: APIRoute = async ({ request }) => {

  const req: IFormData = await request.json()
  console.log('request', req)

  // SMTP Server Settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
  })

  const options = {
    from: `Sadko.fi <${req.email}>`,
    replyTo: req.email,
    to: user,
    cc: import.meta.env.SECOND_EMAIL,
    subject: `${req.name} - ${req.title}`,
    html: htmlTemplate(req),
  }

  try {
    // Simutate server response
    const res = new Promise((resolve) => setTimeout(resolve, 1000))
    // return res.then(() => new Response(JSON.stringify({ status: 200 })))

    // Sending email after 1 second for the best user experience and avoid instantaneous redirection
    return res
      .then(() => transporter.sendMail(options))
      .then(() => new Response(JSON.stringify({ status: 200 })))

  } catch (error) {
    return new Response(JSON.stringify({status: 400}))
  }
}
