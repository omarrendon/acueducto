import { ShoppingBag } from "lucide-react";

export default function SideBarHeader() {
  return (
    <header className="w-full flex items-center justify-between px-30 border-b border-gray-200 pb-4 -m-9">
      <h1 className="text-2xl font-bold tracking-tight">
        Za-🦆🦆🦆 - Ecommerce
      </h1>
      <div className="flex items-center space-x-2">
        <ShoppingBag color="red" size={26} />
      </div>
    </header>
  );
}
