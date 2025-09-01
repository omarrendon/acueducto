"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePalindrome } from "../hooks/usePalindrome";
import { CardProductProps } from "./CardProduct";

interface SearchBarProps {
  setProduct: (product: CardProductProps[]) => void;
}

export default function SearchBar({ setProduct }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const { product } = usePalindrome(query);

  useEffect(() => {
    if (product) {
      setProduct([product]);
    }
  }, [product, setProduct]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (query.length <= 3) {
      setProduct([]);
    }
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div className="flex w-full items-center justify-center gap-2">
        <Input
          type="text"
          placeholder="Buscar productos..."
          className="flex-1 w-full"
          value={query}
          onChange={handleSearch}
        />
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer hover:bg-gray-100 "
        >
          Buscar
        </Button>
      </div>
      <p className="w-full text-center text-muted-foreground">
        Busca por título, marca o descripción. Si tu búsqueda es un palíndromo,
        obtendrás <span className="font-semibold">50% OFF</span>.
      </p>
    </div>
  );
}
