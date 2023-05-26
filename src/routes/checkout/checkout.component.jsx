import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeader>
          <HeaderBlock>Product</HeaderBlock>
          <HeaderBlock>Description</HeaderBlock>
          <HeaderBlock>Quantity</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Remove</HeaderBlock>
        </CheckoutHeader>
      </CheckoutHeaderContainer>
      <hr />
      <tbody
        style={{
          width: "100%",
        }}
      >
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <tr>
          <td>
            <Total>Total : ${totalPrice}</Total>
          </td>
        </tr>
      </tbody>
    </CheckoutContainer>
  );
};

export default Checkout;
