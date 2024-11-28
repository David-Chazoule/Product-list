import { Dessert } from "../../types/types";
import IconAdd from "../../styles/icons/icon-add-to-cart.svg";
import IconIncrement from "../../UI/IconIncrement";
import IconDecrement from "../../UI/IconDecrement";
import { useCart } from "../../Context/CartContext";

type CardsProps = {
  item: Dessert;
};

function Cards({ item }: CardsProps) {
  const { addToCart, cart, increment, decrement, dropFromCart } = useCart();

  // Handler to add the item to the cart
  const handleAddToCart = () => {
    addToCart(item);
  };

  // Check if the current item is already in the cart
  const dessertSelected = cart.find(
    (Selectitem) => Selectitem.name === item.name
  );

  // Handler to increment the quantity of the selected item
  const handleIncrement = () => {
    if (dessertSelected) {
      increment(dessertSelected);
    }
  };

  // Handler to decrement the quantity or remove the item from the cart
  const handleDecrement = () => {
    if (dessertSelected) {
      if (dessertSelected.quantity > 1) {
        decrement(dessertSelected);
      } else {
        // Otherwise, remove the item from the cart
        dropFromCart(dessertSelected.name);
      }
    }
  };

  return (
    <div className="card_container">
      <div className="img-container">
        <img
          className={`img ${dessertSelected ? "selected" : ""}`}
          src={`${item.image.desktop}`}
          alt={item.name}
        />
        <img
          className={`imgTablet ${dessertSelected ? "selected" : ""}`}
          src={`${item.image.tablet}`}
          alt={item.name}
        />
        <img
          className={`imgMobile ${dessertSelected ? "selected" : ""}`}
          src={`${item.image.mobile}`}
          alt={item.name}
        />
        {dessertSelected ? (
          <div className="btn-quantity">
            <span onClick={handleDecrement}>
              <IconDecrement />
            </span>
            <p>{dessertSelected.quantity}</p>
            <span onClick={handleIncrement}>
              <IconIncrement />
            </span>
          </div>
        ) : (
          <div className="btn-add" onClick={handleAddToCart}>
            <img src={IconAdd} alt="" />
            <p>Add to Cart</p>
          </div>
        )}
      </div>

      <div className="info_container">
        <h5>{item.category}</h5>
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cards;
