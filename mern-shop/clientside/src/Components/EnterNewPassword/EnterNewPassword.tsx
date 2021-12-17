import { useState } from "react";
import { useParams } from "react-router";
import type { EventTargtProps } from "src/Types/Types";

export const EnterNewPassword = () => {
  const { id, token } = useParams();
  const [newPassword, setNewPassword] = useState({ password: "" });

  const submitNewPassword = async (event: any) => {
    event.preventDefault();

    const changePassword = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPassword)
    };

    try {
      await fetch(`/reset-password/${id}/${token}`, changePassword);
    } catch (err) {
      throw err;
    }
  };

  const handleNewPassword = (event: EventTargtProps) => {
    const { value } = event.target;
    setNewPassword({ password: value });
  };

  return (
    <div>
      <form onSubmit={submitNewPassword}>
        <input type="text" name="resetpassword" onChange={handleNewPassword} />
        <button type="submit">Send new password</button>
      </form>
    </div>
  );
};