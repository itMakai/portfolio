exports.handler = async function(event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  if (!firstName || !lastName || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" })
    };
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server configuration error" })
    };
  }

  const payload = {
    sender: {
      name: `Portfolio Form (${firstName} ${lastName})`,
      email: "itsoftmak@gmail.com" // Must be a verified sender in your Brevo account
    },
    to: [
      {
        email: "itsoftmak@gmail.com",
        name: "iTsoftMak Solutions"
      }
    ],
    subject: `New Contact Form Inquiry from ${firstName} ${lastName}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px; color: #27272a; }
          .container { max-w-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background-color: #09090b; padding: 30px 40px; text-align: center; border-bottom: 4px solid #3b82f6; }
          .header img { max-width: 150px; height: auto; border-radius: 8px; }
          .content { padding: 40px; }
          .title { font-size: 24px; font-weight: bold; margin-top: 0; color: #18181b; }
          .info-block { background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 4px; margin-bottom: 30px; }
          .info-row { margin: 10px 0; font-size: 15px; }
          .info-label { font-weight: bold; color: #64748b; width: 80px; display: inline-block; }
          .message-block { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-top: 20px; }
          .message-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; color: #64748b; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; }
          .message-content { font-size: 16px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .footer { background-color: #f8fafc; padding: 20px 40px; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://raw.githubusercontent.com/itMakai/portfolio/main/public/logo.png" alt="iTsoftMak Solutions Logo" />
          </div>
          
          <div class="content">
            <h1 class="title">New Client Inquiry</h1>
            <p style="color: #64748b; font-size: 16px; line-height: 1.5;">You have received a new message from the contact form on your portfolio website.</p>
            
            <div class="info-block">
              <div class="info-row"><span class="info-label">Name:</span> ${firstName} ${lastName}</div>
              <div class="info-row"><span class="info-label">Email:</span> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
              <div class="info-row"><span class="info-label">Phone:</span> ${phone || '<em>Not provided</em>'}</div>
            </div>
            
            <div class="message-block">
              <h3 class="message-title">Message Details</h3>
              <div class="message-content">${message}</div>
            </div>
          </div>
          
          <div class="footer">
            This is an automated message dispatched securely via Brevo & Netlify Functions.<br>
            &copy; ${new Date().getFullYear()} iTsoftMak Solutions.
          </div>
        </div>
      </body>
      </html>
    `,
    replyTo: {
      email: email,
      name: `${firstName} ${lastName}`
    }
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to send email via Brevo" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
