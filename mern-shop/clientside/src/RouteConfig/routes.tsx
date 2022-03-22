import { EnterNewPassword, Form, Login, PaymentComplete, ProductList, Register, ResetPassword } from "../Components";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";

export const routes = [
  {
    path: "/",
    component: <ProductList />
  },
  {
    path: "/reset-password/:id/:token",
    component: <EnterNewPassword />,
  },
  {
    path: "/register",
    component: <Register />
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/reset-password",
    component: <ResetPassword />,
  },
  {
    path: "/payment-complete",
    component: <PaymentComplete />,
  },
  {
    path: "/cart",
    component: <ShoppingCart />,
  },
  {
    path: "/form",
    component: <Form />,
  },
];