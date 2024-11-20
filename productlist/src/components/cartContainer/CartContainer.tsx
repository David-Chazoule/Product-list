import Cart from "../cart/Cart";

type CartContainerProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartContainer({ setModal }: CartContainerProps) {
  return (
    <div className="cart-container">
      <Cart setModal={setModal} />
    </div>
  );
}

export default CartContainer;
