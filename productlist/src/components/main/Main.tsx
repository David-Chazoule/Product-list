import CardsContainer from "../cardsContainer/CardsContainer";
import CartContainer from "../cartContainer/CartContainer";

type MainProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Main({ setModal }: MainProps) {
  return (
    <div className="Dessert">
      <div className="title-page">
        <h1>Desserts</h1>
      </div>
      <div className="main_container">
        <CardsContainer />

        <CartContainer setModal={setModal} />
      </div>
    </div>
  );
}

export default Main;
