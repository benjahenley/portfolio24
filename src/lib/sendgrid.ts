export async function sendMail(data: any) {
  const sendMail = await fetch("http://localhost:3000/api/mail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });

  try {
    const sendMailData = await sendMail.json();
    console.log(sendMailData);
  } catch (err: any) {
    throw err.message;
  }
}
