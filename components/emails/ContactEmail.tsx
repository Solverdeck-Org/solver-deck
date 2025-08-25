// emails/ContactEmail.tsx
import * as React from "react";

type Props = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  phone,
  company,
  message,
}: Props) {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", lineHeight: 1.6 }}>
      <h2>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phone ? (
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      ) : null}
      {company ? (
        <p>
          <strong>Company:</strong> {company}
        </p>
      ) : null}
      <p>
        <strong>Message:</strong>
      </p>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f6f6f6",
          padding: "12px",
          borderRadius: 8,
        }}
      >
        {message}
      </pre>
    </div>
  );
}
