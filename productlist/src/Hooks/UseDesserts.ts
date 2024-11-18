import { useEffect, useState } from "react";
import axios from "axios";
import { Dessert, DessertData } from "../types/types";

export function UseDesserts(): DessertData {
  const [desserts, setDessert] = useState<Dessert[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Dessert[]>("data.json")
      .then((response) => {
        setDessert(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("erreur lors du chargement de la data", error);
        setError("erreur lors du chargement des données");
        setLoading(false);
      });
  }, []);

  return { desserts, loading, error };
}
