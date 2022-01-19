import { FC, memo, useState, useEffect } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ResetPassword } from "./Components/ResetPassword/ResetPassword";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { EnterNewPassword } from "./Components/EnterNewPassword/EnterNewPassword";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { allProducts } from "./Actions";
import { PaymentComplete } from "./Components/PaymentComplete/PaymentComplete";
import { Form } from "./Components/Form/Form";
import ProductList from "./Components/ProductList/ProductList";
import Cookies from "universal-cookie";
import Navbar from "./Components/Navbar/Navbar";

const App: FC<AppProps> = () => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const cookies = new Cookies("AccessToken");

  const fetchProductApi = async () => {
    setLoader(false);
    try {
      const products = await fetch("https://aliexpress-unofficial.p.rapidapi.com/feedbacks/4000886597329", {
        "method": "GET",
        "headers": {
          // "x-rapidapi-host": process.env.REACT_APP_X_RAPID_API_HOST || "",
          // "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY || ""
          'x-rapidapi-host': 'aliexpress-unofficial.p.rapidapi.com',
          'x-rapidapi-key': '1f094dcf85msh2943fbc106fdaa4p19dc44jsn92856147a0c6'
        }
      });

      const productJSON = await products.json();
      dispatch(allProducts(productJSON.products));
      setLoader(true);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    setIsAuth(false);
    fetchProductApi();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/reset-password/:id/:token" element={<EnterNewPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/payment-complete" element={<PaymentComplete />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter >
  );
};

const mapStateToProps = (state: any) => {
  return {
  };
};

const connector = connect(mapStateToProps);
type AppProps = ConnectedProps<typeof connector>;
export default connector(memo(App));