// EmailJS Configuration
// Instructions for setup:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add your email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    USER_ID: 'YOUR_EMAILJS_USER_ID',  // Your EmailJS User ID
    SERVICE_ID: 'service_j57rll4',    // Your EmailJS Service ID  
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'   // Your EmailJS Template ID
};

// Email template for EmailJS should include these variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_email}} - Your email (badar.maulana.techno@gmail.com)

// Example template content:
/*
New message from your portfolio website!

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/

export default EMAILJS_CONFIG;
