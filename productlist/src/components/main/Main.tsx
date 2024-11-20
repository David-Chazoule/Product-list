import CardsContainer from "../cardsContainer/CardsContainer";

import CartContainer from "../cartContainer/CartContainer";

type MainProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Main({ setModal }: MainProps) {
  return (
    <div className="main_container">
      <CardsContainer />

      <CartContainer setModal={setModal} />
    </div>
  );
}

export default Main;
