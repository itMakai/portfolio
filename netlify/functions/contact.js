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
      name: `${firstName} ${lastName}`,
      email: email // Note: Brevo allows any sender email, but it's often better to send from an authenticated domain and set replyTo
    },
    to: [
      {
        email: "itsoftmak@gmail.com",
        name: "iTsoftMak Solutions"
      }
    ],
    subject: `New Contact Form Inquiry from ${firstName} ${lastName}`,
    htmlContent: `
      <h2>New Contact Inquiry from Portfolio Website</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
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
