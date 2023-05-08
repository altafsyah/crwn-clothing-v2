import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <table className="checkout-container">
      <thead className="checkout-header-container">
        <tr className="checkout-header">
          <th className="header-block">Product</th>
          <th className="header-block">Description</th>
          <th className="header-block">Quantity</th>
          <th className="header-block">Price</th>
          <th className="header-block">Remove</th>
        </tr>
      </thead>
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
            <h1 className="total">Total : ${totalPrice}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Checkout;
