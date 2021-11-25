import { Navigate, Outlet, } from "react-router-dom";
import type { FC } from "react";

interface ProtectedRouteProps {
  isAuth: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};