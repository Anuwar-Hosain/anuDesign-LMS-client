import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSelectClasses from "../../../hooks/useSelectClasses";

const CheckoutForm = ({ item }) => {
  const { price } = item;
  const stripe = useStripe();
  const elements = useElements();
  const [, refetch] = useSelectClasses();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      // setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        selectedId: item?._id,
        price,
        date: new Date(),
        title: item?.title,
        classItemId: item?.classItemId,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          // display confirm
        }
        if (res.data.deleteResult.deletedCount > 0) {
          // display confirm
          refetch();
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-ghost bg-[#fbc102]  text-white"
        >
          Payment Now
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {/* {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )} */}
    </>
  );
};

export default CheckoutForm;