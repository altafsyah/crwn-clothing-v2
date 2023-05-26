import { useContext } from "react";
import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQty,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addToCart, removeFromCart, clearItems } = useContext(CartContext);

  const addItemHandler = () => addToCart(cartItem);
  const removeItemHandler = () => removeFromCart(cartItem);
  const clearItemHandler = () => clearItems(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} width="100%" height="100%" />
      </CheckoutImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQty>
        <span
          onClick={removeItemHandler}
          style={{
            cursor: "pointer",
          }}
        >
          &#60;
        </span>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <span
          onClick={addItemHandler}
          style={{
            cursor: "pointer",
          }}
        >
          &#62;
        </span>
      </CheckoutItemQty>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <td className="remove-button">
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </td>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
