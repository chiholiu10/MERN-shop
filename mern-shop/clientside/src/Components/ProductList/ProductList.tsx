import { connect } from "react-redux";
import { FC, memo } from "react";
import type { ConnectedProps } from "react-redux";
import type { ItemsProps } from "src/Types/Types";
import { addToCart } from "../../Actions";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch } from "react-redux";
import SearchInput from "../Navbar/Navbar";

export const ProductList: FC<ProductListProps> = ({ productList, shoppingCart }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Products</div>

      {productList?.map((item: ItemsProps) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price.currency}</p>
            <p>{item.price.current.value}</p>
            <p>{item.price.current.text}</p>
            <img src={`//${item.imageUrl}`} alt={item.brandName} />
            <button onClick={() => dispatch(addToCart(item, item.id))}>Add to Bag</button>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.reducer.products || [],
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type ProductListProps = ConnectedProps<typeof connector>;
export default connector(memo(ProductList));

