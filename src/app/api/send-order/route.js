import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, number, service, message } = await req.json();

  // ✅ Step 1: Setup transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or your SMTP provider
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // your Gmail or SMTP user
      pass: process.env.EMAIL_PASS, // your Gmail or app password
    },
  });

  try {
    // ✅ Step 2: Send email to *you* (admin)
    await transporter.sendMail({
      from: `"FiqrTech" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `طلب جديد من ${name}`,
      html: `
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${number}</p>
        <p><strong>الخدمة المطلوبة:</strong> ${service}</p>
        <p><strong>الرسالة:</strong><br>${message}</p>
      `,
    });

    // ✅ Step 3: Send confirmation email to *user*
    await transporter.sendMail({
      from: `"FiqrTech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "تم استلام طلبك – FiqrTech",
      html: `
        <p>مرحبًا <strong>${name}</strong>,</p>
        <p>شكرًا لتواصلك معنا، لقد تلقينا طلبك، وسنبذل جهدنا للرد عليك خلال ساعات قليلة.</p>
        <br/>
        <p>أفضل التمنيات،</p>
        <p><strong>FiqrTech</strong></p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "فشل في إرسال البريد الإلكتروني" }), { status: 500 });
  }
}
