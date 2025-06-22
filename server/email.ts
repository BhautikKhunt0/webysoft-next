import nodemailer from 'nodemailer';

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
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: process.env.SMTP_USER ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    } : undefined,
  });

  // Email content
  const mailOptions = {
    from: process.env.FROM_EMAIL || 'noreply@webysoft.com',
    to: process.env.TO_EMAIL || 'contact@webysoft.com',
    subject: `New Contact Form Submission: ${formData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #8e52e8; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #8e52e8; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d; font-size: 14px;">
            <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our high-quality customer service standards.
          </p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    throw error;
  }
}