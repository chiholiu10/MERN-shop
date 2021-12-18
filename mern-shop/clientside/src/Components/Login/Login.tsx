import { FC, FormEvent, useState } from "react";
import type { EventTargtProps, LoginRequestType, LoginType } from "../../Types/Types";

export const Login: FC = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: ""
  });

  const handler = (e: EventTargtProps) => {
    const { value, name } = e.target;
    setLoginData((prevState: LoginType) => ({
      ...prevState,
      [name]: value
    }));
  };

  const loginUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginRequest: LoginRequestType = {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(loginData)
    };

    try {
      await fetch("http://localhost:8080/login", loginRequest);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          <label> Name </label>
          <input type="text" name="username" onChange={handler} />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" onChange={handler} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div >
  );
};