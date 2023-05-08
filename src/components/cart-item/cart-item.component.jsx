import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart-item-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <div className="item-details">
        <h1 className="name">{cartItem.name}</h1>
        <span>
          {cartItem.quantity} x {cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
