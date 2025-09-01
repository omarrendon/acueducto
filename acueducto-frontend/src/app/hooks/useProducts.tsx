import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";
import { CardProductProps } from "../components/CardProduct";

export function useProducts() {
  const [products, setProducts] = useState<CardProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(data => setProducts(data.products))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
