import nodemailer from "nodemailer";

export async function POST(req) {
   try {
      const payload = await req.json();
      const { name, email, message } = payload;

      if (!name || !email || !message) {
         return new Response("Please provide all required fields", { status: 400 });
      }

      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 465,
         secure: "true",
         auth: {
            user: "no.reply.registry.01@gmail.com",
            pass: "weefgnuuykvkxyaf",
         },
      });

      const mailData = {
         from: "no.reply.registry.01@gmail.com",
         to: "victorrony89@gmail.com",
         subject: `Contact Form Portfolio from ${name}`,
         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailData);

      return new Response("Email sent successfully", { status: 200 });
   } catch (error) {
      console.error("Error sending email:", error);
      return new Response("Failed to send email", { status: 500 });
   }
}
