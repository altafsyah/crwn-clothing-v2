import {
  CartDropdownContainer,
  CartItems,
  EmptyCartMsg,
} from "./cart-dropdown.styles.jsx";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyCartMsg>Your Cart is Empty</EmptyCartMsg>
        )}
      </CartItems>
      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
