import emptyImg from "../../styles/icons/illustration-empty-cart.svg";
import { useCart } from "../../Context/CartContext";
function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart">
      <div className="cart-quantity">
        <h3>Your Cart (0)</h3>
      </div>

      <div className="cart-detail">
        {cart.length > 0 ? (
          <div className="cart-detail-information">
            {cart &&
              cart.map((item, index) => (
                <div className="card">
                  <div className="card-detail">
                    <span className="title">
                      <h3>{item.name}</h3>
                    </span>
                    <span className="price-detail">
                      <p>x{item.quantity}</p>
                      <p>@ $ {item.price}</p>
                    </span>
                  </div>
                  <div className="btn-delete-box">
                    <span>X</span>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="cart-empty">
            <img src={emptyImg} alt="" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
