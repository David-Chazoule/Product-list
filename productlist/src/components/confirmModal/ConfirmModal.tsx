import { useCart } from "../../Context/CartContext";
import confirmed from "../../styles/icons/icon-order-confirmed.svg";

type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ConfirmModal({ setModal }: ModalProps) {
  const { cart, newOrder } = useCart();

  const handleNewOrder = () => {
    newOrder();
    setModal(false);
  };

  const total = cart.reduce(
    (curr, next) => curr + next.price * next.quantity,
    0
  );
  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="title-box">
          <img src={confirmed} alt="icon-confirmed" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy food!</p>
        </div>

        <div className="cart-container">
          {cart.map((item, index) => (
            <div key={index} className="carts">
              <div className="cart-detail">
                <img
                  className="img"
                  src={`${item.image.thumbnail}`}
                  alt={item.name}
                />
                <div className="detail">
                  <h5>{item.name}</h5>
                  <div className="quantity-price-box">
                    <p className="quantity">{item.quantity}x</p>{" "}
                    <p className="price"> @ ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="item-total-price">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
              <div className="line"></div>
            </div>
          ))}
          <div className="total-price">
            <p>Order Total</p> <h2>${total.toFixed(2)}</h2>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={handleNewOrder}>Start New Order</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
