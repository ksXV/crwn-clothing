import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51KYAcpB8gZb77eh6r1hUIbIntxGVOmoJb2PKlsEnvFgSkBUyEScyP37shretdd5P8kDcWXPHlWBwPIaDbDvH1Iqt00omqtJ7MO";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckOutButton;
