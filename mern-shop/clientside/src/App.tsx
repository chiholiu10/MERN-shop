import { FC, memo, useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { ResetPassword } from "./Components/ResetPassword/ResetPassword";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { EnterNewPassword } from "./Components/EnterNewPassword/EnterNewPassword";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import Cookies from "universal-cookie";

const App: FC<AppProps> = () => {
  const [isAuth, setIsAuth] = useState(false);
  const cookies = new Cookies("AccessToken");
  console.log(cookies === null);

  useEffect(() => {
    setIsAuth(false);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute isAuth={true} />}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/reset-password/:id/:token" element={<EnterNewPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

const mapStateToProps = (state: any) => {
  return {
  };
};

const connector = connect(mapStateToProps);
type AppProps = ConnectedProps<typeof connector>;
export default connector(memo(App));