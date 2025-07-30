# Contact Form Setup Instructions

The contact form is now fully functional and ready for cloud deployment. Here's how to set it up:

## 🚀 Quick Setup

### 1. Configure Email Settings

Copy the example environment file and configure your email settings:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
```

### 2. Gmail Setup (Recommended)

For Gmail users:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account Settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this app password as `EMAIL_PASS` in your `.env.local`

### 3. Alternative Email Providers

For other email providers, update the transporter configuration in `app/api/contact/route.js`:

```javascript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

## ☁️ Cloud Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `CONTACT_EMAIL`

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Other Platforms
The contact form uses standard Next.js API routes and will work on any platform that supports Node.js serverless functions.

## 🔧 Features

- ✅ Form validation (client and server-side)
- ✅ Email format validation
- ✅ HTML and text email formats
- ✅ Error handling with specific error messages
- ✅ Loading states and success feedback
- ✅ Responsive design
- ✅ Cloud-ready architecture

## 🧪 Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the contact form submission

## 🔒 Security Notes

- Environment variables are properly configured and ignored by git
- Server-side validation prevents malicious submissions
- Email credentials are securely stored in environment variables
- CORS is handled by Next.js automatically

## 📧 Email Template

The contact form sends beautifully formatted HTML emails with:
- Professional styling
- Clear contact information
- Easy-to-read message formatting
- Reply-to functionality

## 🐛 Troubleshooting

### Common Issues:

1. **Authentication Error**: Check your email credentials and app password
2. **Connection Error**: Verify SMTP settings for your email provider
3. **Form not submitting**: Check browser console for JavaScript errors
4. **Environment variables not loading**: Restart the development server

### Error Messages:
- The API provides specific error messages for different failure scenarios
- Check the browser network tab for detailed error responses
- Server logs will show detailed error information

## 📱 Mobile Compatibility

The contact form is fully responsive and works seamlessly on:
- Desktop browsers
- Mobile devices
- Tablets
- All modern browsers

Your contact form is now ready for production use! 🎉