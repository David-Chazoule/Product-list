import { UseDesserts } from "../../Hooks/UseDesserts";
import { Dessert } from "../../types/types";
import Cards from "../cards/Cards";

function CardsContainer() {
  const { desserts, loading, error } = UseDesserts();

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="container">
      {desserts.map((item: Dessert, index: number) => (
        <Cards key={index} item={item} />
      ))}
    </div>
  );
}

export default CardsContainer;
