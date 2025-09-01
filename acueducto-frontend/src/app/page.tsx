// Components
import SideBarHeader from "./components/SideBarHeader";
import ProductsLayout from "./components/ProductsLayout";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SideBarHeader />
      <main className="flex flex-col gap-[32px] row-start-2 items-center  sm:items-start">
        <ProductsLayout />
      </main>
    </div>
  );
}
