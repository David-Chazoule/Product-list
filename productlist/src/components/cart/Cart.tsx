import emptyImg from "../../styles/icons/illustration-empty-cart.svg";
import { useCart } from "../../Context/CartContext";
import carbone from "../../styles/icons/icon-carbon-neutral.svg";
import IconRemove from "../../UI/IconRemove";

type CartProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setModal }: CartProps) {
  const { cart, dropFromCart } = useCart();
  const total = cart.reduce(
    (curr, next) => curr + next.price * next.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-quantity">
        <h2>Your Cart ({cart ? cart.length : "0"})</h2>
      </div>

      <div className="cart-detail">
        {cart.length > 0 ? (
          <div className="cart-detail-information">
            {cart.map((item, index) => (
              <div key={index} className="card">
                <div className="card-box">
                  <div className="card-detail">
                    <span className="title">
                      <p>{item.name}</p>
                    </span>
                    <span className="price-detail">
                      <p className="quantity">{item.quantity}x</p>
                      <p className="price">@ $ {item.price.toFixed(2)}</p>
                      <p className="total-price-item">
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                    </span>
                  </div>
                  <div className="btn-delete-box">
                    <span
                      className="remove-btn"
                      onClick={() => dropFromCart(item.name)}
                    >
                      <IconRemove />
                    </span>
                  </div>
                </div>
                <span className="line"></span>
              </div>
            ))}
            <div className="order-total-container">
              <div className="order-total">
                <p>Order Total</p> <h1>$ {total.toFixed(2)}</h1>
              </div>

              <div className="carbone">
                <img src={carbone} alt="" />{" "}
                <p>
                  This is a <span>carbon-neutral</span> delivery
                </p>
              </div>
              <div className="confirm-btn-box">
                <button onClick={() => setModal(true)}>Confirm Order</button>
              </div>
            </div>
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
