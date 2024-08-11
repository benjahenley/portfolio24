import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
  status: string;
  message?: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const msg = {
      to: "benjahenley@hotmail.com",
      from: email,
      subject: `Message from: ${name}`,
      text: message,
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent");
      res.status(200).json({ status: "ok" });
    } catch (error: any) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ status: "error", message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
