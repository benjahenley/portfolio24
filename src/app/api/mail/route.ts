import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, name, message } = body;

    const msg = {
      to: "benjahenley@hotmail.com",
      from: email,
      subject: `Message from: ${name}`,
      text: message,
    };

    await sgMail.send(msg);
    console.log("Email sent");
    return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
};
