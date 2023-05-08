import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addToCart, removeFromCart, clearItems } = useContext(CartContext);

  const addItemHandler = () => addToCart(cartItem);
  const removeItemHandler = () => removeFromCart(cartItem);
  const clearItemHandler = () => clearItems(cartItem);

  return (
    <tr className="checkout-item-container">
      <td className="image-container">
        <img src={imageUrl} alt={name} />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        <span onClick={removeItemHandler} className="arrow">
          &#60;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={addItemHandler} className="arrow">
          &#62;
        </span>
      </td>
      <td className="price">{price}</td>
      <td className="remove-button">
        <span onClick={clearItemHandler} className="remove-button">
          &#10005;
        </span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
