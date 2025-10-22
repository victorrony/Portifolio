import nodemailer from "nodemailer";

// Rate limiting simples (em produção, use Redis ou similar)
const attempts = new Map();

export async function POST(req) {
   try {
      // Rate limiting básico
      const ip = req.headers.get("x-forwarded-for") || "unknown";
      const now = Date.now();
      const windowMs = 15 * 60 * 1000; // 15 minutos
      const maxAttempts = 3;

      if (attempts.has(ip)) {
         const { count, firstAttempt } = attempts.get(ip);
         if (now - firstAttempt < windowMs) {
            if (count >= maxAttempts) {
               return new Response("Too many requests. Try again later.", { status: 429 });
            }
            attempts.set(ip, { count: count + 1, firstAttempt });
         } else {
            attempts.set(ip, { count: 1, firstAttempt: now });
         }
      } else {
         attempts.set(ip, { count: 1, firstAttempt: now });
      }

      const payload = await req.json();
      const { name, email, message } = payload;

      // Validação mais rigorosa
      if (!name || !email || !message) {
         return new Response("Please provide all required fields", { status: 400 });
      }

      if (name.length > 100 || email.length > 254 || message.length > 1000) {
         return new Response("Field length exceeded", { status: 400 });
      }

      // Email regex simples
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return new Response("Invalid email format", { status: 400 });
      }

      const transporter = nodemailer.createTransporter({
         host: process.env.EMAIL_HOST,
         port: parseInt(process.env.EMAIL_PORT),
         secure: process.env.EMAIL_SECURE === "true",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      const mailData = {
         from: process.env.EMAIL_USER,
         to: process.env.EMAIL_TO,
         subject: `Contact Form Portfolio from ${name}`,
         text: `Name: ${name}
Email: ${email}
Message: ${message}`,
         html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
         `,
      };

      await transporter.sendMail(mailData);

      return new Response("Email sent successfully", { status: 200 });
   } catch (error) {
      console.error("Error sending email:", error);
      return new Response("Failed to send email", { status: 500 });
   }
}
