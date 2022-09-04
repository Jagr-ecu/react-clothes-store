import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./CartDropdownStyles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>El carrito esta vacio</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={goToCheckoutHandler}>Ir al Carrito</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
