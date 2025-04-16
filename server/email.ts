import nodemailer from 'nodemailer';

// Email configuration using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: parseInt(process.env.EMAIL_PORT || '587', 10) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Sends an email notification for contact form submissions
 * @param formData The contact form data submitted by the user
 * @returns Promise with the nodemailer send result
 */
export async function sendContactFormEmail(formData: ContactFormData) {
  const { name, email, phone, subject, message } = formData;
  
  // Format email content with professional design
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #eeeeee;
        }
        .header h1 {
          color: #6366f1;
          margin: 0;
          font-size: 24px;
        }
        .logo {
          margin-bottom: 15px;
        }
        .content {
          padding: 20px 0;
        }
        .message-box {
          background-color: #f5f7fb;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .info-item {
          margin-bottom: 12px;
        }
        .info-label {
          font-weight: 600;
          width: 100px;
          display: inline-block;
          color: #4b5563;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          color: #6b7280;
          font-size: 14px;
          border-top: 1px solid #eeeeee;
        }
        .timestamp {
          color: #9ca3af;
          font-size: 12px;
          margin-top: 12px;
          text-align: right;
        }
        .cta-button {
          display: inline-block;
          background-color: #6366f1;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <!-- Logo can be added here if desired -->
            <span style="font-size: 36px; font-weight: bold; color: #6366f1;">WebySoft</span>
          </div>
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <p>You have received a new message from your website contact form.</p>
          
          <div class="info-item"><span class="info-label">Name:</span> ${name}</div>
          <div class="info-item"><span class="info-label">Email:</span> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></div>
          ${phone ? `<div class="info-item"><span class="info-label">Phone:</span> ${phone}</div>` : ''}
          <div class="info-item"><span class="info-label">Subject:</span> ${subject}</div>
          
          <div class="message-box">
            <h3 style="margin-top: 0; color: #4b5563;">Message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div class="timestamp">
            Submitted on ${currentDate}
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated email from your WebySoft website contact form.</p>
          <p>© ${new Date().getFullYear()} WebySoft. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  // Email options
  const mailOptions = {
    from: `"WebySoft - Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: `📧 New Website Inquiry: ${subject}`,
    html: emailContent,
    replyTo: email,
    // Adding priority headers
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High',
      'Importance': 'high'
    }
  };
  
  // Send email
  return transporter.sendMail(mailOptions);
}

// Verify connection on startup
transporter.verify(function(error, success) {
  if (error) {
    console.error('Email server connection error:', error);
  } else {
    console.log('Email server connection successful');
  }
});