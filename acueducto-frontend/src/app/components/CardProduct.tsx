import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

export interface CardProductProps {
  id: string;
  title: string;
  brand: number;
  description: string;
  price: number;
  discounted: number | null;
}

export default function CardProduct({
  id,
  title,
  brand,
  description,
  price,
  discounted,
}: CardProductProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {discounted ? (
            <span className="text-lg font-bold text-red-500">$ {price}</span>
          ) : (
            <span className="text-lg font-bold">$ {price}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardDescription className="flex items-center gap-1">
          <Tag color="red" /> {brand}
        </CardDescription>
        <Button variant="outline" className="w-full cursor-pointer">
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
