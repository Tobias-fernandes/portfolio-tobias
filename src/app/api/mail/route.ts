import { render } from "@react-email/render";
import Email from "@/../emails";
import { Resend } from "resend";

function allowCors() {
  return {
    "Access-Control-Allow-Origin": "localhost:3000",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tobys312@gmail.com",
    subject: "PORTFOLIO MESSAGE PLEASE SEE THIS",
    html: await render(Email({ name, email, message })),
  });

  if (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred. Check your connection and try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...allowCors(),
        },
      }
    );
  }

  return new Response(JSON.stringify({ message: "Email sent successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...allowCors(),
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...allowCors(),
    },
  });
}
