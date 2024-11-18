import { Dessert } from "../../types/types";

type CardsProps = {
  item: Dessert;
};

function Cards({ item }: CardsProps) {
  return (
    <div className="card_container">
      <img className="img" src={`${item.image.desktop}`} alt={item.name} />
      <div className="info_container">
        <h4>{item.category}</h4>
        <h3>{item.name}</h3>
        <h5>${item.price}</h5>
      </div>
    </div>
  );
}

export default Cards;
