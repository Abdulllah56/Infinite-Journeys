import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      // Create a Nodemailer transporter object
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail email from env variables
          pass: process.env.GMAIL_PASS, // Your Gmail App Password or regular password
        },
      });

      // Setup email options
      const mailOptions = {
        from: email, // Sender address (form's email field)
        to: process.env.GMAIL_USER, // Your email address (recipient)
        subject: subject || 'New Contact Form Submission', // Subject line
        text: `You have received a new message from ${name} (${email}):\n\n${message}`, // Message body
      };

      // Send email with defined transport object
      await transporter.sendMail(mailOptions);

      // Return success response
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      // Log the error to see details
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    // Handle unsupported request methods
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
