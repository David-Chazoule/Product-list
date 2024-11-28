import { useEffect, useState } from "react";
import axios from "axios";
import { Dessert, DessertData } from "../types/types";

export function UseDesserts(): DessertData {
  const [desserts, setDessert] = useState<Dessert[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Dessert[]>("data.json")
      .then((response) => {
        setDessert(response.data);
      })
      .catch((error) => {
        console.error("erreur lors du chargement de la data", error);
        setError("erreur lors du chargement des données");
      });
  }, []);

  return { desserts, error };
}
