import { CartItemContainer, CartItemDetails } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt={cartItem.name} width="30%" />
      <CartItemDetails>
        <h1 style={{ fontSize: "16px" }}>{cartItem.name}</h1>
        <span>
          {cartItem.quantity} x {cartItem.price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
