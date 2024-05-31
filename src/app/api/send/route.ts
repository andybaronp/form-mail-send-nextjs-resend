import { EmailTemplate } from '@/components/email/email-templete'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { username, email, message } = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: ' ',
      to: ' ',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      react: EmailTemplate({ firstName: username }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
