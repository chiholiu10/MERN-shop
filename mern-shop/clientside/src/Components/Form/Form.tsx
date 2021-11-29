import { FC, FormEvent, useState } from "react";
import type { EventTargtProps, FormProps } from "src/Types/Types";

export const Form: FC = () => {
  const [formData, getFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  console.log(formData);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    const requestOption = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData)
    };

    try {
      const send = await fetch("http://localhost:8080/sendForm", requestOption);
      console.log(send);
    } catch (error) {
      console.log(error);
    }
  };

  const getForm = (event: EventTargtProps) => {
    const { value, name } = event.target;
    getFormData((prevState: FormProps) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label>Your Email</label>
        <input type="email" name="email" onChange={getForm} required />
      </div>
      <div>
        <label>Subject</label>
        <input type="text" name="subject" onChange={getForm} required />
      </div>
      <div>
        <label>Your Message</label>
        <textarea name="message" rows={10} cols={33} onChange={getForm} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};