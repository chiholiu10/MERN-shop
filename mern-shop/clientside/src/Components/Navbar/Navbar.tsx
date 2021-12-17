import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { NavigationBar } from "./Navbar.styles";
import SearchInput from "../SearchInput/SearchInput";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Navbar: FC<SearchInputProps> = () => {
  return (
    <NavigationBar>
      <SearchInput />
      <ShoppingCart />
    </NavigationBar>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.reducer.products || [],
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type SearchInputProps = ConnectedProps<typeof connector>;
export default connector(memo(Navbar));