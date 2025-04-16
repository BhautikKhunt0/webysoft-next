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
  
  // Format email content
  const emailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    <p><strong>Subject:</strong> ${subject}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;
  
  // Email options
  const mailOptions = {
    from: `"WebySoft Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT,
    subject: `New Contact: ${subject}`,
    html: emailContent,
    replyTo: email,
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