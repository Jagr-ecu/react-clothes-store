import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/CartSelector";
import { selectCurrentUser } from "../../store/user/UserSelector";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { FormContainer, PaymentButton, PaymentFormContainer } from "./PaymentFormStyles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  //4242 4242 4242 4242: tarjeta de test en stripe
  const paymentHandler = async (e) => {
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

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement), //lee datos de componente predefinido por stripe
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
        alert("Pago hecho con éxito");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Pago por Tarjeta de Crédito:</h2>
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
