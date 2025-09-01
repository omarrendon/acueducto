"use client";
import { useEffect, useState } from "react";
// Components
import CardProduct, { CardProductProps } from "./CardProduct";
import { useProducts } from "../hooks/useProducts";
import SearchBar from "./SearchBar";

export default function ProductsLayout() {
  const [isShowCard, setIsShowCard] = useState(false);
  const [product, setProduct] = useState<CardProductProps[]>();
  const { products, loading, error } = useProducts();
  const productList = products || [];

  useEffect(() => {
    if (product && product.length > 0) {
      setIsShowCard(true);
    }
    return () => setIsShowCard(false);
  }, [product, productList, isShowCard]);

  if (loading) return <div className="text-center ">Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <SearchBar setProduct={setProduct} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isShowCard && product ? (
          <>
            <CardProduct
              id={product[0]?.id}
              title={product[0]?.title}
              brand={product[0]?.brand}
              description={product[0]?.description}
              price={product[0]?.price}
              discounted={product[0]?.discounted ? product[0].discounted : null}
            />
          </>
        ) : (
          productList.map((product: CardProductProps) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
              description={product.description}
              price={product.price}
              discounted={product.discounted ? product.discounted : null}
            />
          ))
        )}
      </div>
    </>
  );
}
// test
