import { FC, useState, useEffect } from "react";
import {
  PaymentElement,
  // CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export const CheckOutForm: FC = () => {
  // const [success, setSuccess] = useState(false);
  // const stripe: any = useStripe();
  // const elements: any = useElements();

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement)
  //   });


  //   if (!error) {
  //     try {
  //       const { id } = paymentMethod;
  //       const paymentOption = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           amount: 1000,
  //           id
  //         })
  //       };

  //       const response: any = await fetch("http://localhost:8080/payment", paymentOption);
  //       const newUpdate = await response.json();
  //       console.log(newUpdate, response);

  //       if (newUpdate.success) {
  //         console.log("Successful payment");
  //         setSuccess(newUpdate.success);
  //         return;
  //       }
  //       setSuccess(newUpdate.success);
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   } else {
  //     console.log(error.message);
  //   }
  // };

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment-complete",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };
  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>

        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};