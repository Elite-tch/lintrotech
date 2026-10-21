import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, selected, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "");
    const emailTo = process.env.EMAIL_TO?.trim() || emailUser;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured on the server. Please add EMAIL_USER and EMAIL_PASS to your .env.local file.",
        },
        { status: 500 }
      );
    }

    // Configure the Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const selectedNeeds =
      Array.isArray(selected) && selected.length > 0
        ? selected.join(", ")
        : "None specified";

    const mailOptions = {
      from: `"${name}" <${emailUser}>`,
      replyTo: email,
      to: emailTo,
      subject: `New Project Enquiry from ${name}`,
      text: `New Project Enquiry:

Name: ${name}
Email: ${email}
Needs / Services: ${selectedNeeds}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E7E2D8; border-radius: 12px; background-color: #FFFFFF; color: #171717;">
          <h2 style="margin-top: 0; color: #FF5B22; font-size: 20px; border-bottom: 1px solid #E7E2D8; padding-bottom: 12px;">New Project Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #52525B;">Name:</td>
              <td style="padding: 8px 0; color: #171717;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525B;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #FF5B22; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #52525B;">Needs / Services:</td>
              <td style="padding: 8px 0; color: #171717;">${selectedNeeds}</td>
            </tr>
          </table>
          <div style="background-color: #FBF8F3; padding: 16px; border-radius: 8px; border: 1px solid #E7E2D8;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #52525B; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</p>
            <p style="margin: 0; line-height: 1.6; color: #171717; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #8E8E99; margin-top: 24px; margin-bottom: 0;">
            Sent from your website contact form. Clicking "Reply" in your email client will reply directly to ${name} (${email}).
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error sending email:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
