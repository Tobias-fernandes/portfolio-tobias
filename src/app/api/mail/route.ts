import { render } from "@react-email/render";
import Email from "@/../emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tobys312@gmail.com",
    subject: "PORTFOLIO MESSAGE PLEASE SEE THIS",
    html: await render(Email({ name, email, message })),
  });

  if (error) {
    throw new Error("An error ocurred. Check your connection and try again");
  }

  return Response.json({ message: "Email sent successfully" });
}
