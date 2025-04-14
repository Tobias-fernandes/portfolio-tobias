import { Html, Body } from "@react-email/components";

export default function Email({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Body>
        <h1>NAME: {name}</h1>
        <h2>EMAIL: {email}</h2>
        <p>MESSAGE: {message}</p>
      </Body>
    </Html>
  );
}
