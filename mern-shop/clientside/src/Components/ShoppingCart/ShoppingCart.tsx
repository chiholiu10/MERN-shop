import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../Actions";
import { useDispatch } from "react-redux";

export const ShoppingCart: FC<ShoppingCartProps> = ({ shoppingCart }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {shoppingCart?.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(item, item.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(item, item.id))}>-</button>
          </div>
        );
      })}

    </div>
  );
};

const mapStateToProps = (state: any) => ({
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type ShoppingCartProps = ConnectedProps<typeof connector>;
export default connector(memo(ShoppingCart));