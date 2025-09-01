import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";
import { CardProductProps } from "../components/CardProduct";

export function usePalindrome(query?: string) {
  const [product, setProduct] = useState<CardProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchProducts(query)
        .then(data => setProduct(data.products[0] || null))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return { product, loading, error };
}
