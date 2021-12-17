import { FC, memo, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../Actions";
import { useDispatch } from "react-redux";
import { ShoppingCartComponent } from "./ShoppingCart.styles";
import { CheckOutForm } from "../CheckOutForm/CheckOutForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const ShoppingCart: FC<ShoppingCartProps> = ({ shoppingCart }) => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState<any>(null);
  const stripePromise = loadStripe('pk_test_51GsFA7EZJORHGbIlSmIQYnZBCdrjAfvyp0uEJWyiiWTUxy6Ik33oBzrc3RGk53xy1qXQ02qD4DrK6qiQZ6avI5Zz008JCsiF8k');

  const fetchPayment = async () => {
    const paymentHeader = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    };

    try {
      const hello = await fetch("http://localhost:8080/create-payment-intent", paymentHeader);
      const json = await hello.json();
      setClientSecret(json.clientSecret);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  const options = {
    clientSecret
  };

  return (
    <ShoppingCartComponent>
      {shoppingCart.map((item: any) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item, item.id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item, item.id))}>-</button>
          <button onClick={() => dispatch(deleteFromCart(item.id))}>Delete</button>
        </div>
      ))}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </ShoppingCartComponent>
  );
};

const mapStateToProps = (state: any) => ({
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type ShoppingCartProps = ConnectedProps<typeof connector>;
export default connector(memo(ShoppingCart));