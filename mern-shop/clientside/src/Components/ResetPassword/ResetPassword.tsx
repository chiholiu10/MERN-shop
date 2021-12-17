import { FC, useState } from "react";
import type { EventTargtProps } from "src/Types/Types";

export const ResetPassword: FC = () => {
  const [resetPassword, setResetPassword] = useState({ email: "" });

  const handler = (e: EventTargtProps) => {
    const { value } = e.target;
    setResetPassword({ email: value });
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();

    const passwordRequest = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(resetPassword)
    };

    try {
      await fetch("http://localhost:8080/reset-password", passwordRequest);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input type="text" name="email" onChange={handler} />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};