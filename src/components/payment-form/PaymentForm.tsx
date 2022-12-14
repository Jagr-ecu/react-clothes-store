import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useState, FormEvent } from 'react';
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/CartSelector";
import { selectCurrentUser } from "../../store/user/UserSelector";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormContainer, PaymentButton, PaymentFormContainer } from "./PaymentFormStyles";

//cardDetails === null equivale a !ifValidCardElement(cardDetails)
const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => 
  card !== null

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  //4242 4242 4242 4242: tarjeta de test en stripe
  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret; //importante, sin esto no se completa la transaccion

    const cardDetails = elements.getElement(CardElement);

    if(cardDetails === null) return;
 
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails, //lee datos de componente predefinido por stripe
        billing_details: {
          name: currentUser ? currentUser.displayName : "Anonimo",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Pago hecho con ??xito");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Pago por Tarjeta de Cr??dito:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Paga Ahora
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
