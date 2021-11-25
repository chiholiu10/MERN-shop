import { FC, useState } from "react";
import type { EventTargtProps, LoginType } from "src/Types/Types";

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

  const loginUser = async (event: any) => {
    event.preventDefault();
    const loginRequest = {
      method: 'POST',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)
    };

    try {
      await fetch("http://localhost:8080/login", loginRequest);
    } catch (error) {
      console.log(error);
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