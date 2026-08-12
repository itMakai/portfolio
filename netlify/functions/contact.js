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

  // 1. Payload sent to the Company (You)
  const adminPayload = {
    sender: {
      name: "iTsoftMak Solutions",
      email: "itsoftmak@gmail.com"
    },
    to: [
      {
        email: "itsoftmak@gmail.com",
        name: "iTsoftMak Solutions Support"
      }
    ],
    subject: `New Client Inquiry: ${firstName} ${lastName}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px; color: #27272a; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
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
            This is an automated message dispatched securely via Brevo & Netlify.<br>
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

  // 2. Auto-responder sent to the Client
  const clientPayload = {
    sender: {
      name: "iTsoftMak Solutions",
      email: "itsoftmak@gmail.com"
    },
    to: [
      {
        email: email,
        name: `${firstName} ${lastName}`
      }
    ],
    subject: "Thank you for contacting iTsoftMak Solutions",
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px; color: #27272a; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .header { background-color: #09090b; padding: 30px 40px; text-align: center; border-bottom: 4px solid #3b82f6; }
          .header img { max-width: 150px; height: auto; border-radius: 8px; }
          .content { padding: 40px; }
          .title { font-size: 24px; font-weight: bold; margin-top: 0; color: #18181b; margin-bottom: 20px; }
          .message-content { font-size: 16px; line-height: 1.6; color: #334155; }
          .footer { background-color: #f8fafc; padding: 20px 40px; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://raw.githubusercontent.com/itMakai/portfolio/main/public/logo.png" alt="iTsoftMak Solutions Logo" />
          </div>
          
          <div class="content">
            <h1 class="title">Thank You, ${firstName}.</h1>
            <p class="message-content">
              We have successfully received your message and our team is currently reviewing your inquiry.
            </p>
            <p class="message-content">
              At <strong>iTsoftMak Solutions</strong>, we pride ourselves on building practical software, robust cybersecurity implementations, and intelligent networking systems. One of our specialists will be in touch with you shortly with a practical next step.
            </p>
            <p class="message-content" style="margin-top: 30px;">
              Best regards,<br>
              <strong>The iTsoftMak Solutions Team</strong>
            </p>
          </div>
          
          <div class="footer">
            &copy; ${new Date().getFullYear()} iTsoftMak Solutions. All rights reserved.<br>
            Please do not reply directly to this automated email.
          </div>
        </div>
      </body>
      </html>
    `
  };

  const sendEmailRequest = (payload) => {
    return fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  };

  try {
    // Dispatch both emails concurrently for max speed
    const [adminResponse, clientResponse] = await Promise.all([
      sendEmailRequest(adminPayload),
      sendEmailRequest(clientPayload)
    ]);

    if (!adminResponse.ok || !clientResponse.ok) {
      console.error("Admin Email Status:", adminResponse.status);
      console.error("Client Email Status:", clientResponse.status);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to dispatch all emails." })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" })
    };
  } catch (error) {
    console.error("Error sending emails:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
