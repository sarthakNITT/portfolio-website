import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'sarthakkarodework@gmail.com';

    // Prefer Gmail App Password if provided
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    let transporter: nodemailer.Transporter;
    let fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@example.com';

    if (gmailUser && gmailAppPassword) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailAppPassword },
      });
      fromEmail = process.env.CONTACT_FROM_EMAIL || gmailUser;
    } else {
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpSecure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';
      fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser || fromEmail;

      if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
        return NextResponse.json(
          { error: 'Email transport is not configured (set Gmail App Password or SMTP vars).' },
          { status: 500 }
        );
      }

      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    const emailSubject = subject || `New message from ${name}`;
    const text = `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${emailSubject}\n\nMessage:\n${message}`;
    const html = `
      <div>
        <p>You have received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}


