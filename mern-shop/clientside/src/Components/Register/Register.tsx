import { FC, useState } from "react";
import type { EventTargtProps, RegisterType } from "../../Types/Types";

export const Register: FC = () => {
  const [registerData, setRegisterData] = useState<RegisterType>({
    username: "",
    password: "",
    email: ""
  });

  const postData = async () => {
    const data = registerData;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    try {
      await fetch("http://localhost:8080/register", requestOptions);
    } catch (err) {
      throw err;
    }
  };

  const registerForm = () => postData();

  const handleChange = (evt: EventTargtProps) => {
    const { value, name } = evt.target;
    setRegisterData((prevState: RegisterType) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={registerForm}>
        <div>
          <label> Username </label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label>Email </label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div >
  );
};