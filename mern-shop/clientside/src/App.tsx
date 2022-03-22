import { FC, memo, useState, useEffect } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { allProducts } from "./Actions";
import Cookies from "universal-cookie";
import Navbar from "./Components/Navbar/Navbar";
import { fetchData } from "./Services/api";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import { routes } from "./RouteConfig/routes";

const App: FC<AppProps> = () => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const cookies = new Cookies("AccessToken");

  const fetchProductApi = async () => {
    setLoader(false);
    try {
      const products = await fetchData();
      dispatch(allProducts(products));
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
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
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